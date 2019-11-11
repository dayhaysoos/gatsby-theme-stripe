/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { withFormik } from 'formik'
import { Container, CardMedia } from '@material-ui/core'
import * as Yup from 'yup'

const formikWrapper = withFormik({
  mapPropsToValues: ({ skus }) => {
    return skus.reduce(
      (acc, current) => {
        const color = acc.attributes.color
        const size = acc.attributes.size
        const gender = acc.attributes.gender

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
      {
        attributes: { size: [], color: [], gender: [] },
        color: '',
        size: '',
        gender: '',
      }
    )
  },
  validationSchema: Yup.object().shape({
    color: Yup.string().required('Color is required!'),
    size: Yup.string().required('Size is required'),
    gender: Yup.string().required('Gender is required'),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(values)
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'SelectForm',
})

const ProductForm = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    skus,
  } = props

  const selectedItemByColor = skus.find(sku => {
    console.log()
    return sku.attributes.color.includes(values.color)
  })

  const { attributes } = values
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        {Object.keys(attributes).map(attribute => {
          return (
            <Fragment key={attribute}>
              <label htmlFor="email" sx={{ display: 'block' }}>
                {attribute}
              </label>

              <select
                name={attribute}
                value={values[attribute]}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ display: 'block' }}
              >
                <option label={`Select a ${attribute}`} />
                {attributes[attribute].map(optionValue => {
                  return (
                    <option
                      key={`${attribute}-${optionValue}`}
                      value={optionValue}
                      label={optionValue}
                    />
                  )
                })}
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

      <CardMedia
        sx={{ height: '50px', width: '50px' }}
        image={selectedItemByColor.image}
      />
    </Container>
  )
}

const SelectForm = formikWrapper(ProductForm)

export default SelectForm
