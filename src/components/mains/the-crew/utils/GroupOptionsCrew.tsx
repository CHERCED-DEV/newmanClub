import Image from 'next/image';
import React, { memo } from 'react';
import { GroupOptionsCrewDataProps } from './thecrew.interface';

const GroupOptionsCrew: React.FC<GroupOptionsCrewDataProps> = ({ group_options }) => {
    return (
        <article className="group-options-crew">
            <div className="group-options-crew__image-container">
                {
                    group_options.img.src && (
                        <Image
                            src={group_options.img.src}
                            alt={group_options.img.alt}
                            width={group_options.img.width}
                            height={group_options.img.height}
                        />
                    )
                }
            </div>
            <span className="group-options-crew__title">{group_options.users}</span>
            <p className="group-options-crew__description">{group_options.description}</p>
        </article>
    );
};

export default memo(GroupOptionsCrew);
