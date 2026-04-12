'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Check, ChevronDown, Loader2, Send } from 'lucide-react';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company: string;
};

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  company: ''
};

const serviceOptions = [
  'Derecho Tributario',
  'Derecho Laboral Empresarial',
  'Derecho Comercial y Societario',
  'Derecho Penal',
  'Derecho de Familia y Sucesiones',
  'Derecho de Daños'
] as const;

const inputClass =
  'h-[3.25rem] w-full rounded-[12px] border border-border bg-[#f7f4f3] px-4 text-base text-foreground outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10';

export function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM ?? '';
  const [state, handleSubmit] = useForm(formId);

  const [form, setForm] = useState<FormState>(initialState);
  const [feedback, setFeedback] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const hasErrors = Boolean(state.errors);

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!selectRef.current?.contains(event.target as Node)) {
        setIsSelectOpen(false);
      }
    }

    window.addEventListener('mousedown', handlePointerDown);
    return () => window.removeEventListener('mousedown', handlePointerDown);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      setFeedback(
        'Consulta enviada correctamente. Te vamos a responder a la brevedad.'
      );
      setForm(initialState);
      setIsSelectOpen(false);
      return;
    }

    if (hasErrors) {
      setFeedback(
        'No pudimos enviar tu consulta. Revisá los campos e intentá nuevamente.'
      );
      return;
    }

    if (state.submitting) {
      setFeedback('Enviando consulta...');
      return;
    }

    setFeedback('');
  }, [state.succeeded, state.submitting, hasErrors]);

  const isDisabled = useMemo(() => {
    return (
      state.submitting ||
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.message.trim() ||
      !formId
    );
  }, [form, state.submitting, formId]);

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <label
          htmlFor="fullName"
          className="mb-2 block text-base font-medium text-foreground"
        >
          Nombre y apellido *
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={form.fullName}
          onChange={(event) =>
            setForm((current) => ({ ...current, fullName: event.target.value }))
          }
          className={inputClass}
          placeholder="Ej. María González"
          required
        />
        <ValidationError
          prefix="Nombre"
          field="fullName"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <div className="sm:col-span-1">
        <label
          htmlFor="email"
          className="mb-2 block text-base font-medium text-foreground"
        >
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) =>
            setForm((current) => ({ ...current, email: event.target.value }))
          }
          className={inputClass}
          placeholder="nombre@gmail.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <div className="sm:col-span-1">
        <label
          htmlFor="phone"
          className="mb-2 block text-base font-medium text-foreground"
        >
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) =>
            setForm((current) => ({ ...current, phone: event.target.value }))
          }
          className={inputClass}
          placeholder="11 5418-9477"
        />
        <ValidationError
          prefix="Teléfono"
          field="phone"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <div className="sm:col-span-1">
        <label
          htmlFor="service-button"
          className="mb-2 block text-base font-medium text-foreground"
        >
          Área de interés
        </label>

        <div ref={selectRef} className="relative">
          <button
            id="service-button"
            type="button"
            aria-haspopup="listbox"
            aria-expanded={isSelectOpen}
            onClick={() => setIsSelectOpen((current) => !current)}
            className={`${inputClass} flex items-center justify-between pr-4 text-left ${
              isSelectOpen ? 'border-accent bg-white ring-4 ring-accent/10' : ''
            }`}
          >
            <span className={form.service ? 'text-foreground' : 'text-muted'}>
              {form.service || 'Seleccionar'}
            </span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-accent transition-transform ${
                isSelectOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <input type="hidden" name="service" value={form.service} />

          {isSelectOpen ? (
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-20 overflow-hidden rounded-[14px] border border-border bg-white shadow-[0_18px_40px_rgba(47,38,61,0.14)]">
              <ul
                role="listbox"
                aria-label="Área de interés"
                className="max-h-72 overflow-y-auto p-2"
              >
                {serviceOptions.map((option) => {
                  const selected = option === form.service;

                  return (
                    <li key={option}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={selected}
                        onClick={() => {
                          setForm((current) => ({ ...current, service: option }));
                          setIsSelectOpen(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-[10px] px-4 py-3 text-left text-base transition-colors ${
                          selected
                            ? 'bg-accent text-white'
                            : 'text-foreground hover:bg-[#f7f4f3]'
                        }`}
                      >
                        <span>{option}</span>
                        {selected ? <Check className="h-4 w-4" /> : null}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
        </div>

        <ValidationError
          prefix="Área"
          field="service"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(event) =>
          setForm((current) => ({ ...current, company: event.target.value }))
        }
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="mb-2 block text-base font-medium text-foreground"
        >
          Contanos tu consulta *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({ ...current, message: event.target.value }))
          }
          className="min-h-40 w-full rounded-[12px] border border-border bg-[#f7f4f3] px-4 py-3 text-base text-foreground outline-none transition focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10"
          placeholder="Describí brevemente tu necesidad para que podamos orientarte mejor."
          required
        />
        <ValidationError
          prefix="Mensaje"
          field="message"
          errors={state.errors}
          className="mt-2 text-sm text-red-600"
        />
      </div>

      <input
        type="hidden"
        name="_subject"
        value="Nueva consulta desde DV Legales"
      />
      <input type="hidden" name="_language" value="es" />

      <div className="sm:col-span-2 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p
            className={`text-base leading-7 ${
              hasErrors
                ? 'text-red-600'
                : state.succeeded
                  ? 'text-green-700'
                  : !formId
                    ? 'text-red-600'
                    : 'text-muted'
            }`}
          >
            {feedback ||
              (!formId
                ? 'Falta configurar el formulario de Formspree.'
                : 'Te responderemos a la brevedad para ayudarte con el primer paso hacia la solución que necesitás.')}
          </p>

          <ValidationError
            errors={state.errors}
            className="mt-2 text-sm text-red-600"
          />
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="btn-accent-fill inline-flex h-[3.25rem] min-w-[210px] items-center justify-center gap-2 whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state.submitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          Enviar consulta
        </button>
      </div>
    </form>
  );
}