import { useState } from 'react'
import styles from './EditProfileModal.module.css'

function EditProfileModal({
  isOpen,
  title,
  fields,
  values,
  validationErrors,
  onChange,
  onCancel,
  onSave,
}) {
  const [openDropdown, setOpenDropdown] =
    useState(false)

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={onCancel}
    >
      <div
        className={styles.modal}
        onClick={event =>
          event.stopPropagation()
        }
      >
        <h2 className={styles.title}>
          {title}
        </h2>

        <div className={styles.form}>
          {fields.map(field => (
            <div key={field.key}>
              {field.type ===
              'select' ? (
                <div
                  className={
                    styles.dropdownWrapper
                  }
                >
                  <button
                    type="button"
                    className={`${styles.customSelect} ${
                      validationErrors?.[
                        field.key
                      ]
                        ? styles.errorInput
                        : ''
                    }`}
                    onClick={() =>
                      setOpenDropdown(
                        prev => !prev,
                      )
                    }
                  >
                    <span
                      className={
                        values[
                          field.key
                        ]
                          ? styles.selectedValue
                          : styles.placeholder
                      }
                    >
                      {values[
                        field.key
                      ] ||
                        field.placeholder}
                    </span>

                    <span
                      className={`${styles.chevron} ${
                        openDropdown
                          ? styles.chevronOpen
                          : ''
                      }`}
                    >
                      ⌄
                    </span>
                  </button>

                  {openDropdown && (
                    <div
                      className={
                        styles.dropdownMenu
                      }
                    >
                      {field.options?.map(
                        option => (
                          <button
                            key={option}
                            type="button"
                            className={
                              styles.dropdownOption
                            }
                            onClick={() => {
                              onChange(
                                field.key,
                                option,
                              )
                              setOpenDropdown(
                                false,
                              )
                            }}
                          >
                            {option}
                          </button>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <input
                  type={
                    field.type ||
                    'text'
                  }
                  placeholder={
                    field.placeholder
                  }
                  value={
                    values[
                      field.key
                    ] || ''
                  }
                  onChange={event =>
                    onChange(
                      field.key,
                      event.target
                        .value,
                    )
                  }
                  className={`${styles.input} ${
                    validationErrors?.[
                      field.key
                    ]
                      ? styles.errorInput
                      : ''
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div
          className={styles.actions}
        >
          <button
            type="button"
            className={
              styles.cancelButton
            }
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="button"
            className={
              styles.saveButton
            }
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal