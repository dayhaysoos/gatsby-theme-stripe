/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { withFormik } from 'formik'
import * as Yup from 'yup'

const formikWrapper = withFormik({
  mapPropsToValues: ({ skus }) => {
    return skus.reduce(
      (acc, current) => {
        const color = acc.color
        const size = acc.size
        const gender = acc.gender

        if (current.attributes.color) {
          color.push(current.attributes.color)
        }

        if (current.attributes.size) {
          size.push(current.attributes.size)
        }

        if (current.attributes.gender) {
          gender.push(current.attributes.gender)
        }

        return {
          ...acc,
        }
      },
      { size: [], color: [], gender: [] }
    )
  },
  validationScheme: Yup.object().shape({
    color: Yup.string().required('Color is required!'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'SelectForm',
})

const ProductForm = props => {
  const {
    initialValues,
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props

  // const { attributes } = values
  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(values).map(attribute => {
        return (
          <Fragment key={attribute}>
            <label htmlFor="email" sx={{ display: 'block' }}>
              {attribute}
            </label>
            <select
              name={attribute}
              value={attribute}
              onChange={handleChange}
              onBlur={handleBlur}
              sx={{ display: 'block' }}
            >
              {initialValues[attribute].map(optionValue => (
                <option
                  key={`${attribute}-${optionValue}`}
                  value={optionValue}
                  label={optionValue}
                />
              ))}
            </select>
          </Fragment>
        )
      })}
      {errors.color && touched.color && (
        <div className="input-feedback">{errors.color}</div>
      )}

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  )
}

const SelectForm = formikWrapper(ProductForm)

export default SelectForm
