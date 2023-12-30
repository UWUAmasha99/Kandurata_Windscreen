import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Container } from '@mui/system';


const Basic = () => (
  <div >
    
    <Formik
      initialValues={{ VehicalCode: '', Quantity: '' , ContactNum: '' , Address: '',Service:'' }}
      validate={values => {
        const errors = {};
        if (!values.VehicalCode) {
          errors.VehicalCode = 'Required';
        } 
        if(!values.Quantity){
            errors.Quantity = 'Required'; 
        }
        if(!values.ContactNum){
            errors.ContactNum = 'Required'; 
        }
        if(!values.Address){
            errors.Address = 'Required'; 
        }
        if(!values.Service){
          errors.Service = 'Required'; 
      }
        return errors;
      }}


      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
       
          alert("Order successfully received. A representative of ours will contact you via phone.");
          console.log(values)
          axios.post("http://localhost:8000/create",values);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
       <center >
        <Container>
        <form onSubmit={handleSubmit}  style={{ backgroundColor: "#E5E4E2" }}>
        
          <h3>Add your Order</h3>
          
            <lable>vehicle code</lable><br></br>
          <input
           
            type="text"
            name="VehicalCode"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.VehicalCode}
          />
          {errors.VehicalCode && touched.VehicalCode && errors.VehicalCode}
          <br></br>
          <lable>num of Quantity</lable><br></br>
          <input
            type="text"
            name="Quantity"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Quantity}
          />
          {errors.Quantity && touched.Quantity && errors.Quantity}
          <br></br>
          <lable>Contact Num</lable><br></br>
          <input
            type="text"
            name="ContactNum"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ContactNum}
          />
          {errors.ContactNum && touched.ContactNum && errors.ContactNum}
          <br></br>
          <lable>Address</lable><br></br>
          <input
           
            type="text"
            name="Address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Address}
          />
          {errors.Address && touched.Address && errors.Address}
          <br></br>
          <lable>Service Ex:Type:-(Normal/Mobile)</lable><br></br>
          <input
           
            type="text"
            name="Service"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.Service}
          />
          {errors.Service && touched.Service && errors.Service}
          <br></br><br></br>
          <button type="submit" disabled={isSubmitting} style={{backgroundColor:"red",borderRadius: "8px",paddingLeft:"12px",paddingRight:"12px"}}>
            Submit
          </button>
        </form>
        </Container>
        </center>
      )}
    </Formik>
  </div>
);

export default Basic;