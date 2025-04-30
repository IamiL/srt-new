import styles from './contacts.module.css';
import './contacts.css'

export default function Contacts({enLan}) {
    return <section id="contacts">
        <h2>
            {enLan ? 'Join Us!' :
                'Присоединяйтесь к нам!'}
        </h2>
        <div>
            <p className="text2" id={styles.text2}>
                {enLan ? 'We offer opportunities for specialists eager to grow and develop in digital technologies. Regardless of your location, if you have the knowledge and ambition, we’d be delighted to have you on our team. We provide opportunities for training, development, and competitive compensation.' :
                    <>
                        Мы предлагаем сотрудничество<br className="brt4"/> специалистам, которые<br
                        className="brt5"/> хотят<br
                        className="brt1"/> расти и<br className="brt4"/> развиваться в области
                        цифровых<br className="brt5"/> технологий.
                        Если у<br className="brt1"/> вас есть знания и амбиции,<br className="brt4"/> независимо<br
                        className="brt5"/> от
                        вашего<br
                        className="brt1"/> местоположения,
                        мы
                        будем
                        рады видеть вас в нашей<br className="brt1"/> команде. Мы предлагаем возможности для<br
                        className="brt5"/> обучения,<br
                        className="brt6"/> развития
                        и достойного
                        заработка.
                    </>}
                <br/>
                <br/>

                {enLan ? ' We are open to collaborating with regional companies to implement projects and solve pressing local challenges.' :
                    <> Мы готовы к сотрудничеству с<br className="brt4"/> региональными<br className="brt5"/> компаниями<br
                        className="brt1"/> для
                        реализации проектов и
                        решения<br className="brt5"/> актуальных
                        задач<br className="brt4"/> на<br className="brt1"/> местах.
                    </>}
            </p>
            <div id={styles.contacts_list}>
                <h3>
                    {enLan ? 'Contacts' : 'Контакты'}
                </h3>
                <br/>
                <br/>
                <a href="mailto:logistica@povpro.ru">
                    logistica@povpro.ru
                </a>
                <a href="tel:+79276573030">
                    +7 (927) 657-30-30
                </a>
                <a href='https://t.me/+79276573030' className='contactsBlock-contactsList-contact-item'>
                    <svg className='contactsBlock-contactsList-icon' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" width="96" height="96" color="#ffffff"
                         fill="none">
                        <path
                            d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409"
                            stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    telegram
                </a>
                <a href='https://api.whatsapp.com/send/?phone=79276573030'
                   className='contactsBlock-contactsList-contact-item'>
                    <svg className='contactsBlock-contactsList-icon' xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24" width="96" height="96" color="#ffffff"
                         fill="none">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                            stroke="#ffffff" stroke-width="1" stroke-linejoin="round"></path>
                        <path
                            d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                            stroke="#ffffff" stroke-width="1"></path>
                    </svg>
                    whatsApp
                </a>
                <div className='contactsBlock-contactsList-iconLinks'>
                    <a href='https://t.me/+79276573030' className='contactsBlock-contactsList-iconLink-item'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24" width="96" height="96" color="#ffffff"
                             fill="none">
                            <path
                                d="M11.9854 15.4083L15.2268 19.0936C16.4277 20.4589 17.0282 21.1416 17.6567 20.9754C18.2852 20.8092 18.5008 19.9108 18.9318 18.1138L21.3229 8.1459C21.9868 5.37832 22.3187 3.99454 21.5808 3.312C20.843 2.62947 19.564 3.13725 17.0061 4.15282L5.13876 8.86449C3.09293 9.67674 2.07001 10.0829 2.00507 10.7808C1.99842 10.8522 1.99831 10.9241 2.00474 10.9955C2.06754 11.6937 3.08921 12.1033 5.13255 12.9223C6.05838 13.2934 6.5213 13.479 6.8532 13.8344C6.89052 13.8743 6.9264 13.9157 6.96078 13.9584C7.26658 14.3384 7.39709 14.8371 7.65808 15.8344L8.14653 17.701C8.4005 18.6715 8.52749 19.1568 8.86008 19.223C9.19267 19.2891 9.48225 18.8867 10.0614 18.0819L11.9854 15.4083ZM11.9854 15.4083L11.6676 15.0771C11.3059 14.7001 11.1251 14.5117 11.1251 14.2775C11.1251 14.0433 11.3059 13.8548 11.6676 13.4778L15.2406 9.75409"
                                stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </a>
                    <a href='https://api.whatsapp.com/send/?phone=79276573030'
                       className='contactsBlock-contactsList-iconLink-item'>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24" width="96" height="96" color="#ffffff"
                             fill="none">
                            <path
                                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                                stroke="#ffffff" stroke-width="1" stroke-linejoin="round"></path>
                            <path
                                d="M8.58815 12.3773L9.45909 11.2956C9.82616 10.8397 10.2799 10.4153 10.3155 9.80826C10.3244 9.65494 10.2166 8.96657 10.0008 7.58986C9.91601 7.04881 9.41086 7 8.97332 7C8.40314 7 8.11805 7 7.83495 7.12931C7.47714 7.29275 7.10979 7.75231 7.02917 8.13733C6.96539 8.44196 7.01279 8.65187 7.10759 9.07169C7.51023 10.8548 8.45481 12.6158 9.91948 14.0805C11.3842 15.5452 13.1452 16.4898 14.9283 16.8924C15.3481 16.9872 15.558 17.0346 15.8627 16.9708C16.2477 16.8902 16.7072 16.5229 16.8707 16.165C17 15.8819 17 15.5969 17 15.0267C17 14.5891 16.9512 14.084 16.4101 13.9992C15.0334 13.7834 14.3451 13.6756 14.1917 13.6845C13.5847 13.7201 13.1603 14.1738 12.7044 14.5409L11.6227 15.4118"
                                stroke="#ffffff" stroke-width="1"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
}