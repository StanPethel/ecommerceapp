import StripeCheckout from 'react-stripe-checkout';
import { useState, useEffect } from 'react';

const KEY= "pk_test_51KFBCwGo9fdRPIkSsP1A5e5F8Ws8iUmntjv2WCDRH2jwoigc0njLflDTGtNp7k8jYDTTjflbYR6qbeAp92RIkIRv00O0bh7Enk"

const Pay = () =>{
  const [stripeToken, setStripeToken]= useState(null)

  const onToken =()=>{
    setStripeToken(token);
  };

  useEffect(()=>{
    const makeRequest = async()=>{
      try{
        const res = await axios.post("http://localhost:3000/api/checkout/payment",
        {
          tokenId: stripeToken.id,
          amount:10000,
        }
       );
       console.log(res.data);
      }catch(err){
        console.log(err);
      }
    };
     stripeToken && makeRequest
  }, [stripeToken])


    return(
        <div
         style={{
             height: "100vh",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
          }}
         >
           {stripeToken ? (
              <span>Processing. Please wait...</span>
            ) :(
          <StripeCheckout 
              name= "MERN SHOP"
              image= "https://res.cloudinary.com/practicaldev/image/fetch/s--WPQ75f2s--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/epv55hgtsfi8csprpj9u.jpg"
              billingAddress
              shippingAddress
              description= "Your total is $100"
              amount= {10000}
              token={onToken}
              stripeKey={KEY}
          >   
            <button
              style={{
                  border: "none",
                  width: 120,
                  borderRadius: 5,
                  padding: "20px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "600",
                  cursor: "pointer",
              }}
            >
            Pay Now
            </button>
          </StripeCheckout>
          )}
        </div>
    );
};

export default Pay;