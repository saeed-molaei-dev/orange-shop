Hello World :D


/* eslint-disable eqeqeq */ 
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */ 
/* eslint-disable array-callback-return */ 
 
user:

      signup|POST| req: axios.post(
        "http://kzico.runflare.run/user/signup",
        {
          username: "username",
          email: "email",
          password: "password",
          mobile: "phone number",
        }
      )
----------------------------------------------------
      login|POST| req: axios.post(
        "http://kzico.runflare.run/user/login",
        {
          email: "email||username",
          password: "password",
        }
      )
---------------------------------------------------
      GetProfile|get| req: axios.get(
        "http://kzico.runflare.run/user/profile",
        {
          headers: {
            authorization:
              "Bearer token",
          },
        }
      )
---------------------------------------------------
      ChangePassword|PUT| req: axios.put(
        "http://kzico.runflare.run/user/change-password",
        {
          old_password: "old password",
          new_password: "new password",
        },
        {
          headers: {
            authorization:
              "Bearer token",
          },
        }
      )
---------------------------------------------------
      changeProfile|PUT| req: axios.put(
        "http://kzico.runflare.run/user/change-profile",
        {
          firstname: "firstname",
          lastname: "lastname",
          gender: "male",
          age: 26,
          city: "tehran",
        },
        {
          headers: {
            authorization:
              "Bearer token",
          },
        }
      )
--------------------------------------------------
      UploadProfileImage|POST|req: axios.post(
        "http://kzico.runflare.run/user/profile-image",
        formData,
        {
          headers: {
            authorization:
              "Bearer token",
          },
        }
      )

////////////////////////////////////////

product:

	GetAllProduct|get|req: axios.get("http://kzico.runflare.run/product/") 
----------------------------------------------------------------------------------------
	GetOneProduct|get|req: axios.get("http://kzico.runflare.run/product/:productId")

/////////////////////////////////////////    
  
order:

      Submit|POST|req: axios.post(
        "http://kzico.runflare.run/order/submit",
        {
          orderItems: [
            { product: "productId", qty: 2 },
            { product: "productId", qty: 2 },
          ],
          shippingAddress: {
            address: "iran tehran valiasr st.",
            city: "tehran",
            postalCode: "64652465",
            phone: "09120000000",
          },
          paymentMethod: "cash",
          shippingPrice: "5",
          totalPrice: 3,
        },
        {
          headers: {
            authorization:
              "Bearer token",
          },
        }
      )
----------------------------------------------------------------------------------
      GetAllOrder|get|req: axios.get("http://kzico.runflare.run/order/", {
        headers: {
          authorization:
            "Bearer token",
        },
      })
-----------------------------------------------------------------------------------
      GetOneOrder|get|req: axios.get("http://kzico.runflare.run/order/:orderId", {
        headers: {
          authorization:
            "Bearer token",
        },
      })#   O r a n g e - S h o p 
 
 #   O r a n g e - S h o p 
 
 