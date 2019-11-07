/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '../../context/shopping-cart'
import CheckoutImage from '../right-pane/checkout-image'
import { FaWindowClose } from 'react-icons/fa'
import { Formik, FieldArray, Field, Form } from 'formik'
import * as Yup from 'yup'
import { Button, Input } from '@material-ui/core'

const ShoppingCartDetails = () => {
  const {
    detailedCart,
    total,
    deleteItem,
    handleQuantityChange,
    redirectToCheckout,
  } = useCart()

  const updateInputValue = (e, skuID) => {
    const { value } = e.target
    parseInt(value) === 0
      ? deleteItem(skuID)
      : handleQuantityChange(parseInt(value), skuID)
  }

  const handleSubmit = async ({ items }) => {
    await items.forEach(item =>
      item.quantity === 0 ? deleteItem(item.sku) : null
    )

    redirectToCheckout('auto')
  }

  return (
    <>
      <div
        sx={{
          variant: 'cartDetails.container',
          backgroundColor: 'primary',
          paddingTop: '5px',
          paddingBottom: '5px',
          paddingRight: '10px',
          fontWeight: 'bold',
          letterSpacing: '1.3',
          fontSize: '14px',
        }}
      >
        <span sx={{ color: 'primaryText' }}>Product</span>
        <div sx={{ variant: 'cartDetails.inputContainer', width: '95px' }}>
          <span sx={{ color: 'primaryText' }}>Qty</span>
          <span sx={{ color: 'primaryText' }}>Remove</span>
        </div>
      </div>
      <Formik
        initialValues={{ items: detailedCart }}
        enableReinitialize={true}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validationSchema={Yup.object().shape({
          items: Yup.array()
            .of(
              Yup.object().shape({
                quantity: Yup.number().required('Required'),
              })
            )
            .required(`You're making a mistake`),
        })}
        render={({ values, errors }) => (
          <Form>
            <FieldArray
              name={'items'}
              render={() => (
                <div>
                  {values.items && values.items.length > 0 ? (
                    values.items.map(
                      ({ quantity, name, price, localImage, sku }) => (
                        <section
                          key={sku}
                          sx={{ variant: 'cartDetails.itemContainer' }}
                        >
                          <div
                            sx={{
                              variant: 'cartDetails.productContainer',
                              alignItems: 'center',
                            }}
                          >
                            <div sx={{ variant: 'img.checkout' }}>
                              <CheckoutImage
                                sx={{ variant: 'img.skuList' }}
                                size={50}
                                name={name}
                                image={localImage}
                              />
                            </div>
                            <p sx={{ color: 'secondary' }}>{name}</p>
                            <p sx={{ color: 'secondary' }}>{price}</p>
                          </div>
                          <div
                            css={{
                              display: 'flex',
                              flexDirection: 'row',
                            }}
                          >
                            <Input
                              sx={{
                                variant: 'field.checkout',
                                color: 'secondary',
                              }}
                              inputProps={{ style: { textAlign: 'center' } }}
                              type="number"
                              placeholder={'Enter Amount'}
                              name={name}
                              onChange={e => updateInputValue(e, sku)}
                              value={quantity}
                              min={0}
                            />
                            <Button
                              arial-label={`Remove ${name} from cart`}
                              type="submit"
                              onClick={() => deleteItem(sku)}
                              sx={{ variant: 'button.checkout.closeWindow' }}
                            >
                              <FaWindowClose size={30} />
                            </Button>
                          </div>
                        </section>
                      )
                    )
                  ) : (
                    <div
                      sx={{
                        variant: 'cartDetails.container',
                      }}
                      css={{ justifyContent: 'center' }}
                    >
                      <h1 sx={{ color: 'primary' }}>No Cart Items</h1>
                    </div>
                  )}
                </div>
              )}
            />
          </Form>
        )}
      />
      <span
        css={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        Total: {total}
      </span>
    </>
  )
}

export default ShoppingCartDetails
