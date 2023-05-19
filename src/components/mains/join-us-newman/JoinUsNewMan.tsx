import Image from 'next/image';
import React, { memo } from 'react';
import { useForm } from 'react-hook-form';
import { JoinUsDataProps } from './utils/joinus.interface';

const JoinUsNewMan: React.FC<JoinUsDataProps> = ({ join_us }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <main className="join-us">
            <div className="join-us__wrapper">
                <section className="join-us__content">
                    <h1 className="join-us__title">{join_us.main_title}</h1>
                    <p className="join-us__description">{join_us.description}</p>
                    <form className="join-us__form" onSubmit={handleSubmit(onSubmit)}>
                        <input className="join-us__input"
                            type="text" placeholder={join_us.name.placeholder}
                            {...register('name', { required: join_us.name.required })}
                        />
                        {errors.name && <span className="join-us__error">{join_us.name.error}</span>}
                        <input className="join-us__input"
                            type="text"
                            placeholder={join_us.email.placeholder}
                            {...register('email', { required: join_us.email.required, pattern: /^\S+@\S+$/i })}
                        />
                        {errors.email && <span className="join-us__error">{join_us.email.error}</span>}
                        <input className="join-us__input"
                            type="text"
                            placeholder={join_us.phone.error}
                            {...register('phone', { required: join_us.phone.required })}
                        />
                        {errors.phone && <span className="join-us__error">{join_us.phone.error}</span>}
                        <textarea className="join-us__textarea"
                            placeholder={join_us.message.placeholder}
                            {...register('message', { required: join_us.message.required })}>
                        </textarea>
                        {errors.message && <span className="join-us__error">{join_us.message.error}</span>}
                        <button className="join-us__button" type="submit">{join_us.button}</button>
                    </form>
                </section>
                <section className="join-us__image">
                    {
                        join_us.promo.src && (
                            <Image
                                className='join-us__pic'
                                src={join_us.promo.src}
                                alt={join_us.promo.alt}
                                width={join_us.promo.width}
                                height={join_us.promo.height}
                            />
                        )
                    }
                </section>
            </div>
        </main>
    );
};

export default memo(JoinUsNewMan);

