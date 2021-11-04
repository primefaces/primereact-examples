import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { getCountries } from './CountryService';

function FinalForm() {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    useEffect(() => {
        getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validate = (data) => {
        let errors = {};

        if (!data.name) {
            errors.name = 'Name is required.';
        }

        if (!data.email) {
            errors.email = 'Email is required.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = 'Invalid email address. E.g. example@email.com';
        }

        if (!data.password) {
            errors.password = 'Password is required.';
        }

        if (!data.accept) {
            errors.accept = 'You need to agree to the terms and conditions.';
        }

        return errors;
    };

    const onSubmit = (data, form) => {
        setFormData(data);
        setShowMessage(true);

        form.restart();
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="text-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false) } /></div>;

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <div className="text-900 font-bold text-xl mt-5">Registration Successful!</div>
                    <p className="line-height-3 my-4">
                        Your account is registered under name <b>{formData.name}</b>. It'll be valid for 30 days without activation. Please check <b>{formData.email}</b> for activation instructions.
                    </p>
                </div>
            </Dialog>

            <div className="surface-card border-round shadow-2 p-4">
                <span className="text-900 text-2xl font-medium mb-4 block">Register with React Final Form</span>
                <p className="text-700 mt-0 mb-4">Visit <a href="https://final-form.org/react" className="text-primary underline font-medium">React Final Form</a> website for more information.</p>
                <Form onSubmit={onSubmit} initialValues={{ name: '', email: '', password: '', date: null, country: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="p-fluid">
                        <Field name="name" render={({ input, meta }) => (
                            <div className="mb-5">
                                <span className="p-float-label">
                                    <InputText id="name" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Name*</label>
                                </span>
                                {getFormErrorMessage(meta)}
                            </div>
                        )} />
                        <Field name="email" render={({ input, meta }) => (
                            <div className="mb-5">
                                <span className="p-float-label p-input-icon-right">
                                    <i className="pi pi-envelope" />
                                    <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Email*</label>
                                </span>
                                {getFormErrorMessage(meta)}
                            </div>
                        )} />
                        <Field name="password" render={({ input, meta }) => (
                            <div className="mb-5">
                                <span className="p-float-label">
                                    <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>Password*</label>
                                </span>
                                {getFormErrorMessage(meta)}
                            </div>
                        )} />
                        <Field name="date" render={({ input }) => (
                            <div className="mb-5">
                                <span className="p-float-label">
                                    <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                    <label htmlFor="date">Birthday</label>
                                </span>
                            </div>
                        )} />
                        <Field name="country" render={({ input }) => (
                            <div className="mb-5">
                                <span className="p-float-label">
                                    <Dropdown id="country" {...input} options={countries} optionLabel="name" />
                                    <label htmlFor="country">Country</label>
                                </span>
                            </div>
                        )} />
                        <Field name="accept" type="checkbox" render={({ input, meta }) => (
                            <div className="mb-5 flex align-items-center">
                                <Checkbox inputId="accept" {...input} className={classNames('mr-3', { 'p-invalid': isFormFieldValid(meta) })} />
                                <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>I agree to the terms and conditions*</label>
                            </div>
                        )} />

                        <Button type="submit" label="Submit" className="p-mt-2" />
                    </form>
                )} />
            </div>
        </div>
    );
}

export default FinalForm;