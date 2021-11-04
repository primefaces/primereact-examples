import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { getCountries } from './CountryService';

function HookForm() {
    const [countries, setCountries] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});
    const defaultValues = {
        name: '',
        email: '',
        password: '',
        date: null,
        country: null,
        accept: false
    }

    useEffect(() => {
        getCountries().then(data => setCountries(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const { control, formState: { errors }, handleSubmit, reset } = useForm({ defaultValues });

    const onSubmit = (data) => {
        setFormData(data);
        setShowMessage(true);

        reset();
    };

    const getFormErrorMessage = (name) => {
        return errors[name] && <small className="p-error">{errors[name].message}</small>
    };

    const dialogFooter = <div className="text-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

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
                <span className="text-900 text-2xl font-medium mb-4 block">Register with React Hook Form</span>
                <p className="text-700 mt-0 mb-4">Visit <a href="https://react-hook-form.com" className="text-primary underline font-medium">React Hook Form</a> website for more information.</p>
                <form onSubmit={handleSubmit(onSubmit)} className="p-fluid">
                    <div className="mb-5">
                        <span className="p-float-label">
                            <Controller name="name" control={control} rules={{ required: 'Name is required.' }} render={({ field, fieldState }) => (
                                <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="name" className={classNames({ 'p-error': errors.name })}>Name*</label>
                        </span>
                        {getFormErrorMessage('name')}
                    </div>
                    <div className="mb-5">
                        <span className="p-float-label p-input-icon-right">
                            <i className="pi pi-envelope" />
                            <Controller name="email" control={control}
                                rules={{ required: 'Email is required.', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address. E.g. example@email.com' }}}
                                render={({ field, fieldState }) => (
                                    <InputText id={field.name} {...field} className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="email" className={classNames({ 'p-error': !!errors.email })}>Email*</label>
                        </span>
                        {getFormErrorMessage('email')}
                    </div>
                    <div className="mb-5">
                        <span className="p-float-label">
                            <Controller name="password" control={control} rules={{ required: 'Password is required.' }} render={({ field, fieldState }) => (
                                <Password id={field.name} {...field} toggleMask className={classNames({ 'p-invalid': fieldState.invalid })} />
                            )} />
                            <label htmlFor="password" className={classNames({ 'p-error': errors.password })}>Password*</label>
                        </span>
                        {getFormErrorMessage('password')}
                    </div>
                    <div className="mb-5">
                        <span className="p-float-label">
                            <Controller name="date" control={control} render={({ field }) => (
                                <Calendar id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                            )} />
                            <label htmlFor="date">Birthday</label>
                        </span>
                    </div>
                    <div className="mb-5">
                        <span className="p-float-label">
                            <Controller name="country" control={control} render={({ field }) => (
                                <Dropdown id={field.name} value={field.value} onChange={(e) => field.onChange(e.value)} options={countries} optionLabel="name" />
                            )} />
                            <label htmlFor="country">Country</label>
                        </span>
                    </div>
                    <div className="mb-5 flex align-items-center">
                        <Controller name="accept" control={control} rules={{ required: true }} render={({ field, fieldState }) => (
                            <Checkbox inputId={field.name} onChange={(e) => field.onChange(e.checked)} checked={field.value} className={classNames('mr-3', { 'p-invalid': fieldState.invalid })} />
                        )} />
                        <label htmlFor="accept" className={classNames({ 'p-error': errors.accept })}>I agree to the terms and conditions*</label>
                    </div>

                    <Button type="submit" label="Submit" />
                </form>
            </div>
        </div>
    );
}

export default HookForm;