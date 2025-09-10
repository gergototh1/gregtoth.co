import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'gregtoth.me',
    href: 'https://gregtoth.me',
  },
  {
    social: 'email',
    link: 'g@gregtoth.me',
    href: 'mailto:g@gregtoth.me',
  },
  {
    social: 'linkedin',
    link: 'gregtoth_me',
    href: 'https://www.linkedin.com/in/gregtoth_me/',
  },
  {
    social: 'twitter',
    link: 'gregtoth_me',
    href: 'https://www.twitter.com/gregtoth_me',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
