/** @jsx jsx */
import { Fragment } from 'react'
import { jsx } from 'theme-ui'
import { withFormik } from 'formik'
import { Container, CardMedia } from '@material-ui/core'
import * as Yup from 'yup'

// TO BE CONTINUED

const formikWrapper = withFormik({
  mapPropsToValues: ({ skus }) => {
    let obj = {}

    const format = attributes => {
      attributes.forEach(attribute => {
        Object.keys(attribute).forEach(attr => {
          if (obj.hasOwnProperty(attr)) {
            obj[attr].push(attribute[attr])
          } else {
            obj[attr] = []
            obj[attr].push(attribute[attr])
          }
        })
      })
    }

    skus.forEach(sku => format([sku.attributes]))

    return obj
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
    name,
    description,
    caption,
  } = props

  // const selectedItemByColor = skus.find(sku => {
  //   return sku.attributes.color.includes(values.color)
  // })

  console.log('prawps', props)

  const { attributes } = values
  return (
    <Container sx={{ display: 'flex' }}>
      <Container>
        <p>{name}</p>
        <p>{description}</p>
        {/* <p>{selectedItemByColor.price}</p> */}
        {/* <CardMedia
          sx={{ height: '300px', width: '300px' }}
          image={selectedItemByColor.image}
        /> */}
        <p>{caption}</p>
      </Container>
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
    </Container>
  )
}

const SelectForm = formikWrapper(ProductForm)

export default SelectForm
