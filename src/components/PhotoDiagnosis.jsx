/*
 * The signature element.
 *
 * Framed per ART-DIRECTION §10 as a TACTILE PAPER FORM: a deckled paper panel
 * (real feTurbulence displacement on the paper layer, crisp type on top),
 * warm grain, copper hairlines, and an attached photo that presents as a print
 * laid in a tray — matted, faintly rotated, with a contact-sheet caption strip.
 *
 * Real behaviour, no backend: drag-and-drop with a live hover state, a genuine
 * local preview via URL.createObjectURL (revoked on unmount and on replace),
 * type + size validation with real error copy, a labelled progress beat, and a
 * confirmation that reads like a person received it.
 *
 * Mobile presents a COMPACT ENTRY STATE — heading, drop affordance, CTA — that
 * expands into the full form on interaction, so the hero clears the fold at
 * 390x844 with zero scrolling.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, CircleAlert, ImagePlus, PhoneCall, RotateCcw, X } from 'lucide-react'
import { business, widget } from '../data/site.js'
import './PhotoDiagnosis.css'

const MAX_BYTES = 10 * 1024 * 1024

function useIsWide(query = '(min-width: 760px)') {
  const [wide, setWide] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(query).matches : true
  )
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia(query)
    const onChange = (event) => setWide(event.matches)
    mq.addEventListener('change', onChange)
    setWide(mq.matches)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return wide
}

function formatSize(bytes) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function PhotoDiagnosis() {
  const isWide = useIsWide()
  const [expanded, setExpanded] = useState(false)
  const [dragging, setDragging] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [error, setError] = useState('')
  const [phase, setPhase] = useState('idle') // idle | sending | done
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState('')
  const [fields, setFields] = useState({ detail: '', name: '', phone: '' })

  const inputRef = useRef(null)
  const panelRef = useRef(null)
  const previewRef = useRef(null)
  const timers = useRef([])

  // Revoke the object URL on unmount and whenever it is replaced — a preview
  // that is never revoked leaks the blob for the life of the tab.
  useEffect(() => {
    previewRef.current = preview
  }, [preview])

  useEffect(
    () => () => {
      if (previewRef.current) URL.revokeObjectURL(previewRef.current)
      timers.current.forEach(clearTimeout)
    },
    []
  )

  const showFields = isWide || expanded || Boolean(file)

  const acceptFile = useCallback(
    (candidate) => {
      if (!candidate) return
      if (!candidate.type.startsWith('image/')) {
        setError(widget.errorType)
        return
      }
      if (candidate.size > MAX_BYTES) {
        setError(widget.errorSize)
        return
      }
      setError('')
      setPreview((old) => {
        if (old) URL.revokeObjectURL(old)
        return URL.createObjectURL(candidate)
      })
      setFile(candidate)
      setExpanded(true)
    },
    []
  )

  const onDrop = (event) => {
    event.preventDefault()
    setDragging(false)
    acceptFile(event.dataTransfer?.files?.[0])
  }

  const clearFile = () => {
    setPreview((old) => {
      if (old) URL.revokeObjectURL(old)
      return null
    })
    setFile(null)
    if (inputRef.current) inputRef.current.value = ''
  }

  const onSubmit = (event) => {
    event.preventDefault()

    if (!isWide && !expanded) {
      setExpanded(true)
      return
    }
    if (!file && fields.detail.trim().length < 3) {
      setError(widget.errorRequired)
      return
    }
    if (fields.phone.trim().length < 7) {
      setError(widget.errorPhone)
      return
    }

    setError('')
    setPhase('sending')
    setProgress(0)
    setStatus(widget.statusReading)

    const run = [
      [180, 26, widget.statusReading],
      [520, 58, widget.statusReading],
      [900, 82, widget.statusQueue],
      [1240, 100, widget.statusQueue],
    ]
    timers.current.forEach(clearTimeout)
    timers.current = run.map(([at, value, label]) =>
      setTimeout(() => {
        setProgress(value)
        setStatus(label)
      }, at)
    )
    timers.current.push(
      setTimeout(() => {
        setPhase('done')
        setStatus('')
      }, 1620)
    )
  }

  const reset = () => {
    timers.current.forEach(clearTimeout)
    clearFile()
    setFields({ detail: '', name: '', phone: '' })
    setPhase('idle')
    setProgress(0)
    setError('')
    setExpanded(false)
    panelRef.current?.querySelector('.pd__drop')?.focus?.()
  }

  const setField = (key) => (event) => {
    const { value } = event.target
    setFields((prev) => ({ ...prev, [key]: value }))
    if (error) setError('')
  }

  return (
    <div className="pd" ref={panelRef}>
      <div className="pd__paper" aria-hidden="true" />
      <div className="pd__paper-grain grain" aria-hidden="true" />

      <div className="pd__body">
        <p className="pd__eyebrow">{widget.eyebrow}</p>
        <h2 className="pd__title" id="hero-widget-title">
          {widget.heading}
        </h2>

        {phase === 'done' ? (
          <div className="pd__done">
            <div className="pd__done-mark" aria-hidden="true">
              <Check size={17} strokeWidth={2.4} />
            </div>
            <h3 className="pd__done-title">{widget.successTitle}</h3>
            <p className="pd__done-body">{widget.successBody}</p>

            {preview ? (
              <figure className="pd__tray">
                <div className="pd__tray-print">
                  <img className="pd__tray-img" src={preview} alt="The photo you attached" />
                </div>
                <figcaption className="pd__tray-cap">
                  <span className="pd__tray-file">{file?.name}</span>
                  <span className="pd__tray-size">{file ? formatSize(file.size) : ''}</span>
                </figcaption>
              </figure>
            ) : null}

            <div className="pd__done-actions">
              <a className="btn btn-primary" href={business.phoneHref}>
                <PhoneCall className="btn-icon" size={15} strokeWidth={2} aria-hidden="true" />
                {business.phoneDisplay}
              </a>
              <button className="pd__again" type="button" onClick={reset}>
                <RotateCcw size={13} strokeWidth={2} aria-hidden="true" />
                {widget.successAgain}
              </button>
            </div>
            <p className="pd__done-note">{widget.successCallLine}</p>
          </div>
        ) : (
          <form className="pd__form" onSubmit={onSubmit} noValidate>
            <p className="pd__intro">{widget.intro}</p>

            <div
              className={`pd__drop${dragging ? ' is-dragging' : ''}${file ? ' has-file' : ''}`}
              onDragOver={(event) => {
                event.preventDefault()
                setDragging(true)
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
            >
              <input
                className="pd__input-file"
                ref={inputRef}
                id="pd-file"
                type="file"
                accept="image/*"
                onChange={(event) => acceptFile(event.target.files?.[0])}
              />

              {file && preview ? (
                <div className="pd__attached">
                  <div className="pd__print">
                    <img className="pd__print-img" src={preview} alt="Preview of the photo you attached" />
                  </div>
                  <div className="pd__attached-meta">
                    <span className="pd__attached-name">{file.name}</span>
                    <span className="pd__attached-size">{formatSize(file.size)}</span>
                    <div className="pd__attached-actions">
                      <label className="pd__relabel" htmlFor="pd-file">
                        {widget.replace}
                      </label>
                      <button
                        className="pd__clear"
                        type="button"
                        onClick={clearFile}
                        aria-label={widget.remove}
                      >
                        <X size={13} strokeWidth={2.2} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <label className="pd__drop-label" htmlFor="pd-file">
                  <span className="pd__drop-icon" aria-hidden="true">
                    <ImagePlus size={19} strokeWidth={1.7} />
                  </span>
                  <span className="pd__drop-copy">
                    <span className="pd__drop-title">{widget.dropTitle}</span>
                    <span className="pd__drop-hint">{widget.dropHint}</span>
                    <span className="pd__drop-hint-sm">{widget.dropHintMobile}</span>
                  </span>
                  <span className="pd__drop-cue" aria-hidden="true">
                    {widget.browse}
                  </span>
                </label>
              )}
            </div>

            <div className={`pd__fields${showFields ? ' is-open' : ''}`}>
              <div className="pd__fields-inner">
                <div className="pd__field">
                  <label className="pd__label" htmlFor="pd-detail">
                    {widget.describeLabel}
                  </label>
                  <textarea
                    className="pd__control pd__control--area"
                    id="pd-detail"
                    name="detail"
                    rows={2}
                    placeholder={widget.describePlaceholder}
                    value={fields.detail}
                    onChange={setField('detail')}
                  />
                </div>
                <div className="pd__row">
                  <div className="pd__field">
                    <label className="pd__label" htmlFor="pd-name">
                      {widget.nameLabel}
                    </label>
                    <input
                      className="pd__control"
                      id="pd-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={fields.name}
                      onChange={setField('name')}
                    />
                  </div>
                  <div className="pd__field">
                    <label className="pd__label" htmlFor="pd-phone">
                      {widget.phoneLabel}
                    </label>
                    <input
                      className="pd__control"
                      id="pd-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={fields.phone}
                      onChange={setField('phone')}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pd__status" role="status" aria-live="polite">
              {error ? (
                <p className="pd__error">
                  <CircleAlert size={14} strokeWidth={2} aria-hidden="true" />
                  {error}
                </p>
              ) : null}
              {phase === 'sending' ? (
                <div className="pd__progress">
                  <span className="pd__progress-label">{status}</span>
                  <span className="pd__progress-track">
                    <span className="pd__progress-fill" style={{ width: `${progress}%` }} />
                  </span>
                </div>
              ) : null}
            </div>

            <button className="pd__submit" type="submit" disabled={phase === 'sending'}>
              <span>
                {phase === 'sending'
                  ? widget.submitting
                  : showFields
                    ? widget.submit
                    : widget.submitNext}
              </span>
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </button>

            <p className="pd__reassure">{widget.reassurance}</p>
            <p className="pd__demo">{widget.demoNote}</p>
          </form>
        )}
      </div>
    </div>
  )
}
