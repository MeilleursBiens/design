import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const CategoryList = [
    {
        link: "/docs/intro",
        title: "Introduction",
        Svg: require("../../static/img/categories/intro.svg").default,
        description: (
            <>Découvrez la vision de la marque.</>
        ),
    },
    {
        link: "/docs/colors",
        title: "Couleurs",
        Svg: require("../../static/img/categories/colors.svg").default,
        description: (
            <>Les couleurs de la marque.</>
        ),
    },
    {
        link: "/docs/branding",
        title: "Logo",
        Svg: require("../../static/img/categories/default.svg").default,
        description: (
            <>Nos directives en matière d'image de marque.</>
        ),
    },

    {
        link: "/docs/typography",
        title: "Typographie",
        Svg: require("../../static/img/categories/typography.svg").default,
        description: (
            <>Les polices que nous utilisons et les meilleures pratiques en matière de texte.</>
        ),
    },
    {
        link: "/docs/icons",
        title: "Icones",
        Svg: require("../../static/img/categories/icons.svg").default,
        description: (
            <>Notre jeu d'icônes et les directives concernant l'utilisation de chaque type d'icône.</>
        ),
    },
    {
        link: "/docs/social-networks",
        title: "Réseaux Sociaux",
        Svg: require("../../static/img/categories/social.svg").default,
        description: (
            <>Toutes les ressources pour les réseaux sociaux.</>
        ),
    },
];

function Category({Svg, title, description, link}) {
    return (
        <Link to={link} className={clsx('col col--4')}>
            <div>
                <div className={styles.backing}>
                    <Svg className={styles.featureSvg} alt={title}/>
                </div>
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    );
}

export default function HomepageCategories() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {CategoryList.map((props, idx) => (
                        <Category key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
