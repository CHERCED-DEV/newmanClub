import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

export const JoinUsNewMan = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <main className="join-us">
            <section className="join-us__content">
                <h1 className="join-us__title">{ }</h1>
                <p className="join-us__description">{ }</p>
                <form className="join-us__form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="join-us__input"
                        type="text" placeholder="Nombre"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="join-us__error">Este campo es requerido</span>}
                    <input className="join-us__input"
                        type="text"
                        placeholder="Correo electrónico"
                        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className="join-us__error">Este campo es requerido y debe ser un correo electrónico válido</span>}
                    <input className="join-us__input"
                        type="text"
                        placeholder="Número de teléfono"
                        {...register('phone', { required: true })}
                    />
                    {errors.phone && <span className="join-us__error">Este campo es requerido</span>}
                    <textarea className="join-us__textarea"
                        placeholder="Mensaje"
                        {...register('message', { required: true })}>

                    </textarea>
                    {errors.message && <span className="join-us__error">Este campo es requerido</span>}
                    <button className="join-us__button" type="submit">Enviar</button>
                </form>
            </section>
            <section className="join-us__image">
                <Image
                    src="/ruta-de-la-imagen"
                    alt="Imagen de unirse a nuestro equipo"
                    width={800}
                    height={600}
                />
            </section>
        </main>
    );
};

