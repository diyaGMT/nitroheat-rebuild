"use client";

import { useState, type FormEvent } from "react";

export type Field =
  | { kind: "heading"; label: string }
  | {
      kind: "text" | "email" | "tel" | "url" | "number" | "date";
      name: string;
      label: string;
      required?: boolean;
      placeholder?: string;
      half?: boolean;
    }
  | {
      kind: "textarea";
      name: string;
      label: string;
      required?: boolean;
      rows?: number;
    }
  | {
      kind: "select";
      name: string;
      label: string;
      options: readonly string[];
      required?: boolean;
      placeholder?: string;
      half?: boolean;
    }
  | {
      kind: "checkboxes";
      name: string;
      label: string;
      options: readonly string[];
    };

type Status = "idle" | "submitting" | "submitted" | "error";

const inputClass =
  "mt-1 w-full rounded border border-brand-line bg-white px-4 py-2.5 text-brand-dark transition-colors focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green";

const labelClass = "block text-sm font-semibold text-brand-dark";

export default function FormRenderer({
  fields,
  formType,
  submitLabel = "Submit",
  successTitle = "Thanks — we got it.",
  successBody = "A member of the NitroHeat team will be in touch shortly.",
}: {
  fields: Field[];
  formType: string;
  submitLabel?: string;
  successTitle?: string;
  successBody?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const data = new FormData(event.currentTarget);
    const payload: Record<string, string> = {};

    for (const field of fields) {
      if (field.kind === "heading") continue;
      if (field.kind === "checkboxes") {
        const values = data.getAll(field.name).map(String).filter(Boolean);
        if (values.length) payload[field.label] = values.join(", ");
        continue;
      }
      const value = data.get(field.name);
      if (typeof value === "string" && value.trim()) {
        payload[field.label] = value.trim();
      }
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType, fields: payload }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong.");
      }

      setStatus("submitted");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-lg border-l-4 border-brand-green bg-brand-mist p-8">
        <p className="font-heading text-2xl font-semibold text-brand-dark">
          {successTitle}
        </p>
        <p className="mt-2 text-brand-slate">{successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((field, index) => {
        if (field.kind === "heading") {
          return (
            <h3
              key={`${field.label}-${index}`}
              className="border-b border-brand-line pb-2 pt-4 font-heading text-xl font-semibold text-brand-dark first:pt-0"
            >
              {field.label}
            </h3>
          );
        }

        if (field.kind === "textarea") {
          return (
            <div key={field.name}>
              <label htmlFor={field.name} className={labelClass}>
                {field.label}
                {field.required && <span className="text-brand-green-deep"> *</span>}
              </label>
              <textarea
                id={field.name}
                name={field.name}
                rows={field.rows ?? 4}
                required={field.required}
                className={inputClass}
              />
            </div>
          );
        }

        if (field.kind === "select") {
          return (
            <div key={field.name} className={field.half ? "sm:w-1/2" : undefined}>
              <label htmlFor={field.name} className={labelClass}>
                {field.label}
                {field.required && <span className="text-brand-green-deep"> *</span>}
              </label>
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                defaultValue={field.placeholder ? "" : undefined}
                className={inputClass}
              >
                {field.placeholder && (
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                )}
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          );
        }

        if (field.kind === "checkboxes") {
          return (
            <fieldset key={field.name}>
              <legend className={labelClass}>{field.label}</legend>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                {field.options.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 text-sm text-brand-slate"
                  >
                    <input
                      type="checkbox"
                      name={field.name}
                      value={option}
                      className="h-4 w-4 accent-brand-green"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          );
        }

        return (
          <div key={field.name} className={field.half ? "sm:w-1/2" : undefined}>
            <label htmlFor={field.name} className={labelClass}>
              {field.label}
              {field.required && <span className="text-brand-green-deep"> *</span>}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.kind}
              required={field.required}
              placeholder={field.placeholder}
              className={inputClass}
            />
          </div>
        );
      })}

      {status === "error" && (
        <p className="rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded bg-brand-green px-8 py-3 font-heading text-lg font-semibold tracking-wide text-brand-dark transition-colors hover:bg-brand-green-dark hover:text-white disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : submitLabel}
      </button>
    </form>
  );
}
