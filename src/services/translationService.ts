import { ENV } from '../config/env';
import { LanguageKey } from '../config/languages';
import { BotTranslations } from '../types/bot.types';

const translations: Record<LanguageKey, BotTranslations> = {
  EN: {
    welcome:
      '🎉 Welcome to the VST Bot!\n\nI’m here to help you use our VSCode extension for employee monitoring.\n\nPlease choose your preferred language below:',
    help: `🤖 *Bot Commands & Features*

🔹 /start - Welcome message and language selection  
🔹 /help - Show this help menu  
🔹 /language - Change the bot's language  
🔹 /addtogroup - Add the bot to a group  
🔹 /instructions - Detailed bot instructions  
🔹 /creator - About the bot creator  
🔹 /terminate - End the current session  

Choose what you need from the menu below! 👇`,
    language_selected: '✅ Language set to Arabic',
    choose_language: '🌍 Choose your preferred language:',
    add_to_group: '👥 Add the bot to a group',
    add_to_channel: '📢 Add to a channel',
    instructions_title: '📋 *Bot Instructions & Guide*',
    instructions_content: `🔸 *How to Use This Bot:*

1️⃣ **Start**: Use /start to begin and choose your language  
2️⃣ **Help**: Use /help to view available commands  
3️⃣ **Language**: Change language anytime using /language  
4️⃣ **Groups**: Add the bot to groups using /addtogroup  
5️⃣ **Instructions**: Get detailed help via /instructions  

🔸 **About the VST Extension:**  
VST is a VSCode extension that monitors employees while they work on company projects.  
The bot sends messages (to the group or channel) containing logs when a developer *saves* a file.  
It also integrates with GitHub Actions, and soon another bot will support sending these actions:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Need more help? Contact the developer! 👨‍💻`,
    creator_info_title: '👨‍💻 *About the Bot Creator*',
    creator_info_content: `🔸 *Developer Info:*

👤 **Name**: Mahmoud Walid  
🔗 **Username**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Specialty**: React Frontend Developer  
⚡ **Experience**: Over 3 years in web development  
🌍 **Location**: Egypt  
🛠️ **GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)  

🔸 **About the VST Extension:**  
VST is a VSCode extension that monitors employees while working on company projects.  
The bot sends messages (to the group or channel) containing logs when a developer *saves* a file.  
It also integrates with GitHub Actions, and soon another bot will support sending the following operations:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Feel free to reach out for collaboration or questions! 🚀  

**Contact**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Bot Features',
    how_to_use: '❓ How to Use',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Back to Menu',
    main_menu: '🏠 Main Menu',
    language_settings: '🌍 Language Settings',
    about_creator: '👨‍💻 About the Developer',
    bot_instructions: '📋 Instructions',
    unknown_command: '❓ Unknown command. Use /help to see available commands.',
    error_occurred: '❌ An error occurred. Please try again.',
    language_changed: '✅ Language changed successfully!',
    welcome_group:
      '🎉 Thanks for adding me to this group!\n\nUse /help to see what I can do!',
    thanks_for_adding: '🙏 Thanks for adding me!',
    add_to_group_message:
      '🚀 *Add me to your group or channel!*\n\nUse the buttons below to add me:',
    add_to_channel_instruction:
      '_For channels: After adding me as an admin, please send `/start` in the channel to activate me._',
    terminate: '🔴 Terminate',
    terminate_confirm_title: '⚠️ *Confirm Termination*',
    terminate_confirm_message:
      'Are you sure you want to terminate the bot session?\n\nThis will:\n• Clear your current session\n• Reset your language preference\n• Return to the initial state\n\nYou can restart anytime using /start',
    terminate_success:
      '✅ *Session Terminated*\n\nYour session has been successfully ended.\nAll preferences have been reset.\n\nTo restart the bot, use the /start command.',
    terminate_cancelled:
      '✅ *Termination Cancelled*\n\nYour session is still active.\nYou can continue using the bot normally.',
    confirm_terminate: 'Yes, terminate',
    cancel_terminate: 'Cancel',
  },
  AR: {
    welcome:
      '🎉 أهلاً بك في بوت VST!\n\nأنا هنا لمساعدتك لمساعدتك في استخدام اكستنشن vsCode الخاصة بنا لمراقبة الموظفين.\n\nاختر لغتك المفضلة أدناه:',
    help: `🤖 *أوامر ومميزات البوت*

🔹 /start - رسالة الترحيب واختيار اللغة
🔹 /help - عرض قائمة المساعدة هذه
🔹 /language - تغيير لغة البوت
🔹 /addtogroup - إضافة البوت لمجموعة
🔹 /instructions - تعليمات البوت المفصلة
🔹 /creator - عن صانع البوت
🔹 /terminate - إنهاء الجلسة الحالية

اختر ما تحتاجه من القائمة أدناه! 👇`,
    language_selected: '✅ تم تعيين اللغة إلى العربية',
    choose_language: '🌍 اختر لغتك المفضلة:',
    add_to_group: '👥 إضافة البوت للمجموعة',
    add_to_channel: '📢 إضافة للقناة',
    instructions_title: '📋 *تعليمات ودليل البوت*',
    instructions_content: `🔸 *كيفية استخدام هذا البوت:*

1️⃣ **البداية**: استخدم /start للبدء واختيار اللغة
2️⃣ **المساعدة**: استخدم /help لنظرة عامة على الأوامر
3️⃣ **اللغة**: غير اللغة في أي وقت باستخدام /language
4️⃣ **المجموعات**: أضف البوت للمجموعات باستخدام /addtogroup
5️⃣ **التعليمات**: احصل على مساعدة مفصلة باستخدام /instructions

🔸 **عن اكستنشن VST:**
الـ VST هي اكستنشن VSCode تقوم بمراقبة الموظفين أثناء عملهم على مشاريع الشركة.
يقوم البوت بإرسال رسائل (في القناة أو الجروب) تحتوي على logs عند قيام المطور بعمل *حفظ (save)* للملف.
كما تعمل الأكستنشن مع GitHub Actions، وقريبًا سيتم دعم إرسال العمليات التالية من خلال بوت أخر (سوف يأتي قريباً):
- commit
- push
- pull
- new branch
- PR
- issue

تحتاج مساعدة أكثر؟ تواصل مع المطور! 👨‍💻`,
    creator_info_title: '👨‍💻 *عن صانع البوت*',
    creator_info_content: `🔸 *معلومات المطور:*

👤 **الاسم**: محمود وليد
🔗 **اسم المستخدم**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}
💻 **التخصص**: مطور React - الواجهات الأمامية
⚡ **الخبرة**: أكثر من 3 سنوات في تطوير الويب
🌍 **الموقع**: مصر
🛠️ **حساب جيتهاب**: [Mahmoud-walid](https://github.com/Mahmoud-walid)
🎯 **إكس (تويتر)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **عن اكستنشن VST:**
الـ VST هي اكستنشن VSCode تقوم بمراقبة الموظفين أثناء عملهم على مشاريع الشركة.
يقوم البوت بإرسال رسائل (في القناة أو الجروب) تحتوي على logs عند قيام المطور بعمل *حفظ (save)* للملف.
كما تعمل الأكستنشن مع GitHub Actions، وقريبًا سيتم دعم إرسال العمليات التالية من خلال بوت أخر (سوف يأتي قريباً):
- commit
- push
- pull
- new branch
- PR
- issue

لا تتردد في التواصل للتعاون أو الأسئلة! 🚀

**للتواصل**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ مميزات البوت',
    how_to_use: '❓ كيفية الاستخدام',
    support_info: '🆘 الدعم',
    back_to_menu: '⬅️ العودة للقائمة',
    main_menu: '🏠 القائمة الرئيسية',
    language_settings: '🌍 إعدادات اللغة',
    about_creator: '👨‍💻 عن المطور',
    bot_instructions: '📋 التعليمات',
    unknown_command: '❓ أمر غير معروف. استخدم /help لرؤية الأوامر المتاحة.',
    error_occurred: '❌ حدث خطأ. يرجى المحاولة مرة أخرى.',
    language_changed: '✅ تم تغيير اللغة بنجاح!',
    welcome_group:
      '🎉 شكراً لإضافتي إلى هذه المجموعة!\n\nاستخدم /help لرؤية ما يمكنني فعله!',
    thanks_for_adding: '🙏 شكراً لإضافتي!',
    add_to_group_message:
      '🚀 *أضفني إلى مجموعتك أو قناتك!*\\n\\nاستخدم الأزرار أدناه لإضافتي:',
    add_to_channel_instruction:
      '_للقنوات: بعد إضافتي كمسؤول، يرجى إرسال `/start` في القناة لتفعيلي._',
    terminate: '🔴 إنهاء',
    terminate_confirm_title: '⚠️ *تأكيد الإنهاء*',
    terminate_confirm_message:
      'هل أنت متأكد من رغبتك في إنهاء جلسة البوت؟\n\nسيؤدي هذا إلى:\n• مسح جلستك الحالية\n• إعادة تعيين تفضيلات اللغة\n• العودة للحالة الأولية\n\nيمكنك إعادة البدء في أي وقت باستخدام /start',
    terminate_success:
      '✅ *تم إنهاء الجلسة*\n\nتم إنهاء جلستك بنجاح.\nتم إعادة تعيين جميع التفضيلات.\n\nلإعادة تشغيل البوت، استخدم الأمر /start.',
    terminate_cancelled:
      '✅ *تم إلغاء الإنهاء*\n\nجلستك ما زالت نشطة.\nيمكنك الاستمرار في استخدام البوت بشكل طبيعي.',
    confirm_terminate: 'نعم، أنهي',
    cancel_terminate: 'إلغاء',
  },
  RU: {
    welcome:
      '🎉 Добро пожаловать в бота VST!\n\nЯ здесь, чтобы помочь вам использовать наше расширение VSCode для мониторинга сотрудников.\n\nПожалуйста, выберите предпочитаемый язык ниже:',
    help: `🤖 *Команды и функции бота*

🔹 /start - Приветственное сообщение и выбор языка  
🔹 /help - Показать это меню помощи  
🔹 /language - Изменить язык бота  
🔹 /addtogroup - Добавить бота в группу  
🔹 /instructions - Подробные инструкции  
🔹 /creator - О разработчике бота  
🔹 /terminate - Завершить текущую сессию  

Выберите нужную команду из меню ниже! 👇`,
    language_selected: '✅ Язык установлен на арабский',
    choose_language: '🌍 Выберите предпочитаемый язык:',
    add_to_group: '👥 Добавить бота в группу',
    add_to_channel: '📢 Добавить в канал',
    instructions_title: '📋 *Инструкции и руководство по боту*',
    instructions_content: `🔸 *Как использовать бота:*

1️⃣ **Начало**: используйте /start для запуска и выбора языка  
2️⃣ **Помощь**: используйте /help для просмотра доступных команд  
3️⃣ **Язык**: изменяйте язык в любое время через /language  
4️⃣ **Группы**: добавляйте бота в группы с помощью /addtogroup  
5️⃣ **Инструкции**: получите подробную помощь через /instructions  

🔸 **О расширении VST:**  
VST — это расширение для VSCode, которое отслеживает сотрудников во время работы над проектами компании.  
Бот отправляет сообщения (в канал или группу) с логами каждый раз, когда разработчик *сохраняет* файл.  
Также интегрируется с GitHub Actions, а скоро появится дополнительный бот с поддержкой следующих операций:  
- commit  
- push  
- pull  
- новая ветка  
- PR  
- issue  

Нужна дополнительная помощь? Свяжитесь с разработчиком! 👨‍💻`,
    creator_info_title: '👨‍💻 *О разработчике бота*',
    creator_info_content: `🔸 *Информация о разработчике:*

👤 **Имя**: Mahmoud Walid  
🔗 **Имя пользователя**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Специализация**: Frontend-разработчик (React)  
⚡ **Опыт**: более 3 лет в веб-разработке  
🌍 **Страна**: Египет  
🛠️ **GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)  

🔸 **О расширении VST:**  
VST — это расширение для VSCode, предназначенное для мониторинга сотрудников в процессе работы над проектами.  
Бот отправляет сообщения (в канал или группу) с логами при *сохранении* файлов.  
Также поддерживается GitHub Actions. В ближайшее время будет добавлена поддержка следующих операций другим ботом:  
- commit  
- push  
- pull  
- новая ветка  
- PR  
- issue  

Не стесняйтесь обращаться для сотрудничества или вопросов! 🚀  

**Контакт**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Функции бота',
    how_to_use: '❓ Как использовать',
    support_info: '🆘 Поддержка',
    back_to_menu: '⬅️ Назад в меню',
    main_menu: '🏠 Главное меню',
    language_settings: '🌍 Настройки языка',
    about_creator: '👨‍💻 О разработчике',
    bot_instructions: '📋 Инструкции',
    unknown_command:
      '❓ Неизвестная команда. Используйте /help, чтобы увидеть доступные команды.',
    error_occurred: '❌ Произошла ошибка. Пожалуйста, попробуйте снова.',
    language_changed: '✅ Язык успешно изменён!',
    welcome_group:
      '🎉 Спасибо, что добавили меня в группу!\n\nИспользуйте /help, чтобы узнать, что я умею!',
    thanks_for_adding: '🙏 Спасибо за добавление!',
    add_to_group_message:
      '🚀 *Добавьте меня в свою группу или канал!*\n\nИспользуйте кнопки ниже, чтобы добавить:',
    add_to_channel_instruction:
      '_Для каналов: после добавления меня как администратора, пожалуйста, отправьте `/start` в канале для активации._',
    terminate: '🔴 Завершить',
    terminate_confirm_title: '⚠️ *Подтверждение завершения*',
    terminate_confirm_message:
      'Вы уверены, что хотите завершить сессию?\n\nЭто приведёт к:\n• Очистке текущей сессии\n• Сбросу языка\n• Возврату к начальному состоянию\n\nВы всегда можете начать заново с помощью /start',
    terminate_success:
      '✅ *Сессия завершена*\n\nВаша сессия успешно завершена.\nВсе настройки сброшены.\n\nЧтобы запустить бота снова, используйте команду /start.',
    terminate_cancelled:
      '✅ *Завершение отменено*\n\nВаша сессия всё ещё активна.\nВы можете продолжить использовать бота.',
    confirm_terminate: 'Да, завершить',
    cancel_terminate: 'Отмена',
  },
  ES: {
    welcome:
      '🎉 ¡Bienvenido al bot de VST!\n\nEstoy aquí para ayudarte a usar nuestra extensión de VSCode para monitorear a los empleados.\n\nPor favor, elige tu idioma preferido abajo:',
    help: `🤖 *Comandos y funciones del bot*

🔹 /start - Mensaje de bienvenida y selección de idioma  
🔹 /help - Mostrar este menú de ayuda  
🔹 /language - Cambiar el idioma del bot  
🔹 /addtogroup - Agregar el bot a un grupo  
🔹 /instructions - Instrucciones detalladas del bot  
🔹 /creator - Información sobre el creador  
🔹 /terminate - Finalizar la sesión actual  

¡Elige lo que necesitas del menú de abajo! 👇`,
    language_selected: '✅ Idioma establecido a árabe',
    choose_language: '🌍 Elige tu idioma preferido:',
    add_to_group: '👥 Agregar el bot a un grupo',
    add_to_channel: '📢 Agregar al canal',
    instructions_title: '📋 *Guía e instrucciones del bot*',
    instructions_content: `🔸 *Cómo usar este bot:*

1️⃣ **Inicio**: Usa /start para comenzar y seleccionar idioma  
2️⃣ **Ayuda**: Usa /help para ver los comandos disponibles  
3️⃣ **Idioma**: Cambia el idioma en cualquier momento con /language  
4️⃣ **Grupos**: Agrega el bot a grupos con /addtogroup  
5️⃣ **Instrucciones**: Obtén ayuda detallada con /instructions  

🔸 **Sobre la extensión VST:**  
VST es una extensión para VSCode que permite monitorear a los empleados mientras trabajan en proyectos de la empresa.  
El bot envía mensajes (al canal o grupo) con registros cuando un desarrollador *guarda* un archivo.  
También funciona con GitHub Actions, y pronto otro bot permitirá enviar las siguientes acciones:  
- commit  
- push  
- pull  
- nueva rama  
- PR  
- issue  

¿Necesitas más ayuda? ¡Contacta al desarrollador! 👨‍💻`,
    creator_info_title: '👨‍💻 *Sobre el creador del bot*',
    creator_info_content: `🔸 *Información del desarrollador:*

👤 **Nombre**: Mahmoud Walid  
🔗 **Usuario**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Especialidad**: Desarrollador frontend con React  
⚡ **Experiencia**: Más de 3 años en desarrollo web  
🌍 **Ubicación**: Egipto  
🛠️ **GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)  

🔸 **Sobre la extensión VST:**  
VST es una extensión de VSCode para monitorear a los empleados mientras trabajan.  
El bot envía mensajes (al grupo o canal) con registros cuando un desarrollador *guarda* un archivo.  
También se integra con GitHub Actions. Próximamente, otro bot soportará las siguientes operaciones:  
- commit  
- push  
- pull  
- nueva rama  
- PR  
- issue  

¡No dudes en contactar para colaborar o hacer preguntas! 🚀  

**Contacto**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Funciones del bot',
    how_to_use: '❓ Cómo usar',
    support_info: '🆘 Soporte',
    back_to_menu: '⬅️ Volver al menú',
    main_menu: '🏠 Menú principal',
    language_settings: '🌍 Configuración de idioma',
    about_creator: '👨‍💻 Sobre el desarrollador',
    bot_instructions: '📋 Instrucciones',
    unknown_command:
      '❓ Comando desconocido. Usa /help para ver los comandos disponibles.',
    error_occurred: '❌ Ocurrió un error. Por favor, intenta nuevamente.',
    language_changed: '✅ ¡Idioma cambiado con éxito!',
    welcome_group:
      '🎉 ¡Gracias por agregarme a este grupo!\n\nUsa /help para ver lo que puedo hacer.',
    thanks_for_adding: '🙏 ¡Gracias por agregarme!',
    add_to_group_message:
      '🚀 *¡Agrégame a tu grupo o canal!*\n\nUsa los botones de abajo para agregarme:',
    add_to_channel_instruction:
      '_Para canales: después de agregarme como administrador, por favor envía `/start` en el canal para activarme._',
    terminate: '🔴 Finalizar',
    terminate_confirm_title: '⚠️ *Confirmar finalización*',
    terminate_confirm_message:
      '¿Estás seguro de que deseas finalizar la sesión del bot?\n\nEsto hará:\n• Borrar tu sesión actual\n• Restablecer el idioma\n• Volver al estado inicial\n\nPuedes reiniciar en cualquier momento usando /start',
    terminate_success:
      '✅ *Sesión finalizada*\n\nTu sesión ha sido terminada exitosamente.\nTodas las preferencias fueron restablecidas.\n\nPara reiniciar el bot, usa el comando /start.',
    terminate_cancelled:
      '✅ *Finalización cancelada*\n\nTu sesión sigue activa.\nPuedes continuar usando el bot normalmente.',
    confirm_terminate: 'Sí, finalizar',
    cancel_terminate: 'Cancelar',
  },
  PT: {
    welcome:
      '🎉 Bem-vindo ao bot VST!\n\nEstou aqui para te ajudar a usar nossa extensão do VSCode para monitoramento de funcionários.\n\nPor favor, escolha seu idioma preferido abaixo:',
    help: `🤖 *Comandos e funcionalidades do bot*

🔹 /start - Mensagem de boas-vindas e escolha de idioma  
🔹 /help - Mostrar este menu de ajuda  
🔹 /language - Alterar o idioma do bot  
🔹 /addtogroup - Adicionar o bot a um grupo  
🔹 /instructions - Instruções detalhadas sobre o bot  
🔹 /creator - Sobre o criador do bot  
🔹 /terminate - Encerrar a sessão atual  

Escolha o que você precisa no menu abaixo! 👇`,
    language_selected: '✅ Idioma definido para árabe',
    choose_language: '🌍 Escolha seu idioma preferido:',
    add_to_group: '👥 Adicionar o bot ao grupo',
    add_to_channel: '📢 Adicionar ao canal',
    instructions_title: '📋 *Guia e instruções do bot*',
    instructions_content: `🔸 *Como usar este bot:*

1️⃣ **Início**: Use /start para começar e escolher o idioma  
2️⃣ **Ajuda**: Use /help para ver os comandos disponíveis  
3️⃣ **Idioma**: Altere o idioma a qualquer momento com /language  
4️⃣ **Grupos**: Adicione o bot a grupos com /addtogroup  
5️⃣ **Instruções**: Obtenha ajuda detalhada com /instructions  

🔸 **Sobre a extensão VST:**  
VST é uma extensão do VSCode que monitora os funcionários enquanto trabalham em projetos da empresa.  
O bot envia mensagens (no grupo ou canal) com logs sempre que um desenvolvedor *salva* um arquivo.  
Também é integrado com o GitHub Actions, e em breve outro bot irá suportar as seguintes ações:  
- commit  
- push  
- pull  
- novo branch  
- PR  
- issue  

Precisa de mais ajuda? Entre em contato com o desenvolvedor! 👨‍💻`,
    creator_info_title: '👨‍💻 *Sobre o criador do bot*',
    creator_info_content: `🔸 *Informações do desenvolvedor:*

👤 **Nome**: Mahmoud Walid  
🔗 **Nome de usuário**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Especialidade**: Desenvolvedor Frontend com React  
⚡ **Experiência**: Mais de 3 anos em desenvolvimento web  
🌍 **Localização**: Egito  
🛠️ **GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)  

🔸 **Sobre a extensão VST:**  
VST é uma extensão do VSCode para monitorar funcionários durante seu trabalho.  
O bot envia mensagens (no grupo ou canal) com logs quando um desenvolvedor *salva* um arquivo.  
Também funciona com o GitHub Actions, e em breve outro bot irá oferecer suporte às seguintes operações:  
- commit  
- push  
- pull  
- novo branch  
- PR  
- issue  

Sinta-se à vontade para entrar em contato para colaborações ou dúvidas! 🚀  

**Contato**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Funcionalidades do bot',
    how_to_use: '❓ Como usar',
    support_info: '🆘 Suporte',
    back_to_menu: '⬅️ Voltar ao menu',
    main_menu: '🏠 Menu principal',
    language_settings: '🌍 Configurações de idioma',
    about_creator: '👨‍💻 Sobre o desenvolvedor',
    bot_instructions: '📋 Instruções',
    unknown_command:
      '❓ Comando desconhecido. Use /help para ver os comandos disponíveis.',
    error_occurred: '❌ Ocorreu um erro. Por favor, tente novamente.',
    language_changed: '✅ Idioma alterado com sucesso!',
    welcome_group:
      '🎉 Obrigado por me adicionar a este grupo!\n\nUse /help para ver o que eu posso fazer!',
    thanks_for_adding: '🙏 Obrigado por me adicionar!',
    add_to_group_message:
      '🚀 *Adicione-me ao seu grupo ou canal!*\n\nUse os botões abaixo para me adicionar:',
    add_to_channel_instruction:
      '_Para canais: após me adicionar como administrador, por favor envie `/start` no canal para me ativar._',
    terminate: '🔴 Encerrar',
    terminate_confirm_title: '⚠️ *Confirmar encerramento*',
    terminate_confirm_message:
      'Tem certeza de que deseja encerrar a sessão do bot?\n\nIsso irá:\n• Apagar sua sessão atual\n• Redefinir o idioma\n• Retornar ao estado inicial\n\nVocê pode reiniciar a qualquer momento com /start',
    terminate_success:
      '✅ *Sessão encerrada*\n\nSua sessão foi encerrada com sucesso.\nTodas as preferências foram redefinidas.\n\nPara reiniciar o bot, use o comando /start.',
    terminate_cancelled:
      '✅ *Encerramento cancelado*\n\nSua sessão ainda está ativa.\nVocê pode continuar usando o bot normalmente.',
    confirm_terminate: 'Sim, encerrar',
    cancel_terminate: 'Cancelar',
  },
  TR: {
    welcome:
      '🎉 VST Botuna Hoş Geldiniz!\n\nVSCode uzantımızı kullanarak çalışanları izleme konusunda size yardımcı olmak için buradayım.\n\nLütfen aşağıdan tercih ettiğiniz dili seçin:',
    help: `🤖 *Bot Komutları ve Özellikleri*

🔹 /start - Karşılama mesajı ve dil seçimi  
🔹 /help - Bu yardım listesini göster  
🔹 /language - Botun dilini değiştir  
🔹 /addtogroup - Beni bir gruba ekle  
🔹 /instructions - Detaylı bot talimatları  
🔹 /creator - Botun geliştiricisi hakkında  
🔹 /terminate - Mevcut oturumu sonlandır

Aşağıdaki listeden ihtiyacınızı seçin! 👇`,
    language_selected: '✅ Dil Türkçe olarak ayarlandı',
    choose_language: '🌍 Lütfen tercih ettiğiniz dili seçin:',
    add_to_group: '👥 Beni bir gruba ekle',
    add_to_channel: '📢 Kanala ekle',
    instructions_title: '📋 *Bot Talimatları ve Kılavuz*',
    instructions_content: `🔸 *Bot nasıl kullanılır:*

1️⃣ **Başlangıç**: Başlamak ve dil seçmek için /start komutunu kullanın  
2️⃣ **Yardım**: Komutları görmek için /help komutunu kullanın  
3️⃣ **Dil**: Dili değiştirmek için istediğiniz zaman /language komutunu kullanın  
4️⃣ **Gruplar**: Beni gruplara eklemek için /addtogroup kullanın  
5️⃣ **Talimatlar**: Detaylı yardım için /instructions komutunu kullanın

🔸 **VST Uzantısı Hakkında:**
VST, şirket projeleri üzerinde çalışan çalışanları izlemek için kullanılan bir VSCode uzantısıdır.  
Bot, geliştirici bir dosyayı *kaydettiğinde (save)* logları içeren mesajları (kanal veya grupta) gönderir.  
Ayrıca uzantı GitHub Actions ile de çalışır ve yakında aşağıdaki işlemler başka bir bot üzerinden desteklenecektir:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Daha fazla yardıma mı ihtiyacınız var? Geliştiriciyle iletişime geçin! 👨‍💻`,
    creator_info_title: '👨‍💻 *Botun Geliştiricisi Hakkında*',
    creator_info_content: `🔸 *Geliştirici Bilgileri:*

👤 **İsim**: Mahmoud Walid  
🔗 **Kullanıcı Adı**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Uzmanlık**: React Geliştiricisi - Ön Yüz  
⚡ **Deneyim**: 3+ yıl web geliştirme  
🌍 **Konum**: Mısır  
🛠️ **GitHub Hesabı**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **VST Uzantısı Hakkında:**  
VST, şirket projeleri üzerinde çalışan çalışanları izlemek için kullanılan bir VSCode uzantısıdır.  
Bot, geliştirici bir dosyayı *kaydettiğinde (save)* logları içeren mesajları (kanal veya grupta) gönderir.  
Ayrıca uzantı GitHub Actions ile de çalışır ve yakında aşağıdaki işlemler başka bir bot üzerinden desteklenecektir:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

İş birliği veya sorularınız için iletişime geçmekten çekinmeyin! 🚀

**İletişim**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Bot Özellikleri',
    how_to_use: '❓ Nasıl Kullanılır',
    support_info: '🆘 Destek',
    back_to_menu: '⬅️ Menüye Dön',
    main_menu: '🏠 Ana Menü',
    language_settings: '🌍 Dil Ayarları',
    about_creator: '👨‍💻 Geliştirici Hakkında',
    bot_instructions: '📋 Talimatlar',
    unknown_command:
      '❓ Bilinmeyen komut. Mevcut komutları görmek için /help kullanın.',
    error_occurred: '❌ Bir hata oluştu. Lütfen tekrar deneyin.',
    language_changed: '✅ Dil başarıyla değiştirildi!',
    welcome_group:
      '🎉 Beni bu gruba eklediğiniz için teşekkürler!\n\nNe yapabileceğimi görmek için /help komutunu kullanın!',
    thanks_for_adding: '🙏 Eklediğiniz için teşekkürler!',
    add_to_group_message:
      '🚀 *Beni grubunuza veya kanalınıza ekleyin!*\n\nAşağıdaki düğmeleri kullanarak ekleyebilirsiniz:',
    add_to_channel_instruction:
      '_Kanallar için: Beni yönetici olarak ekledikten sonra kanalda `/start` komutunu göndererek etkinleştirin._',
    terminate: '🔴 Sonlandır',
    terminate_confirm_title: '⚠️ *Sonlandırmayı Onayla*',
    terminate_confirm_message:
      'Bot oturumunu sonlandırmak istediğinizden emin misiniz?\n\nBu işlem şunlara neden olur:\n• Mevcut oturum silinir\n• Dil tercihleri sıfırlanır\n• Başlangıç durumuna dönülür\n\nBotu tekrar başlatmak için /start komutunu kullanabilirsiniz.',
    terminate_success:
      '✅ *Oturum Sonlandırıldı*\n\nOturumunuz başarıyla sonlandırıldı.\nTüm tercih ayarları sıfırlandı.\n\nBotu tekrar başlatmak için /start komutunu kullanın.',
    terminate_cancelled:
      '✅ *Sonlandırma İptal Edildi*\n\nOturumunuz hâlâ aktif.\nBotu normal şekilde kullanmaya devam edebilirsiniz.',
    confirm_terminate: 'Evet, sonlandır',
    cancel_terminate: 'İptal',
  },
  DE: {
    welcome:
      '🎉 Willkommen beim VST-Bot!\n\nIch bin hier, um dir bei der Nutzung unserer VSCode-Erweiterung zur Mitarbeiterüberwachung zu helfen.\n\nBitte wähle unten deine bevorzugte Sprache aus:',
    help: `🤖 *Bot-Befehle und Funktionen*

🔹 /start - Begrüßungsnachricht und Sprachauswahl  
🔹 /help - Diese Hilfeliste anzeigen  
🔹 /language - Sprache des Bots ändern  
🔹 /addtogroup - Bot zu einer Gruppe hinzufügen  
🔹 /instructions - Detaillierte Bot-Anleitung  
🔹 /creator - Über den Entwickler  
🔹 /terminate - Aktuelle Sitzung beenden

Wähle unten aus, was du brauchst! 👇`,
    language_selected: '✅ Sprache wurde auf Deutsch eingestellt',
    choose_language: '🌍 Bitte wähle deine bevorzugte Sprache:',
    add_to_group: '👥 Bot zur Gruppe hinzufügen',
    add_to_channel: '📢 Zum Kanal hinzufügen',
    instructions_title: '📋 *Bot-Anleitung und Leitfaden*',
    instructions_content: `🔸 *So verwendest du den Bot:*

1️⃣ **Start**: Verwende /start, um zu beginnen und die Sprache auszuwählen  
2️⃣ **Hilfe**: Verwende /help, um eine Übersicht der Befehle zu erhalten  
3️⃣ **Sprache**: Ändere die Sprache jederzeit mit /language  
4️⃣ **Gruppen**: Füge den Bot zu Gruppen mit /addtogroup hinzu  
5️⃣ **Anleitung**: Für detaillierte Hilfe verwende /instructions

🔸 **Über die VST-Erweiterung:**  
VST ist eine VSCode-Erweiterung, die Mitarbeiter während ihrer Arbeit an Unternehmensprojekten überwacht.  
Der Bot sendet Nachrichten (in Gruppen oder Kanälen), wenn ein Entwickler eine Datei *speichert (save)*.  
Die Erweiterung funktioniert auch mit GitHub Actions, und bald werden weitere Aktionen durch einen separaten Bot unterstützt:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Benötigst du weitere Hilfe? Kontaktiere den Entwickler! 👨‍💻`,
    creator_info_title: '👨‍💻 *Über den Entwickler*',
    creator_info_content: `🔸 *Entwicklerinformationen:*

👤 **Name**: Mahmoud Walid  
🔗 **Benutzername**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Fachgebiet**: React-Entwickler – Frontend  
⚡ **Erfahrung**: Über 3 Jahre Webentwicklung  
🌍 **Standort**: Ägypten  
🛠️ **GitHub-Profil**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **Über die VST-Erweiterung:**  
VST ist eine VSCode-Erweiterung, die Mitarbeiter während ihrer Arbeit an Unternehmensprojekten überwacht.  
Der Bot sendet Nachrichten (in Gruppen oder Kanälen), wenn ein Entwickler eine Datei *speichert (save)*.  
Die Erweiterung funktioniert auch mit GitHub Actions, und bald werden weitere Aktionen durch einen separaten Bot unterstützt:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Zögere nicht, dich bei Fragen oder zur Zusammenarbeit zu melden! 🚀

**Kontakt**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Bot-Funktionen',
    how_to_use: '❓ Verwendung',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Zurück zum Menü',
    main_menu: '🏠 Hauptmenü',
    language_settings: '🌍 Spracheinstellungen',
    about_creator: '👨‍💻 Über den Entwickler',
    bot_instructions: '📋 Anleitung',
    unknown_command:
      '❓ Unbekannter Befehl. Verwende /help, um verfügbare Befehle zu sehen.',
    error_occurred: '❌ Ein Fehler ist aufgetreten. Bitte versuche es erneut.',
    language_changed: '✅ Sprache erfolgreich geändert!',
    welcome_group:
      '🎉 Danke, dass du mich zu dieser Gruppe hinzugefügt hast!\n\nVerwende /help, um zu sehen, was ich kann!',
    thanks_for_adding: '🙏 Danke fürs Hinzufügen!',
    add_to_group_message:
      '🚀 *Füge mich zu deiner Gruppe oder deinem Kanal hinzu!*\n\nNutze die Schaltflächen unten, um mich hinzuzufügen:',
    add_to_channel_instruction:
      '_Für Kanäle: Nachdem du mich als Administrator hinzugefügt hast, sende `/start` im Kanal, um mich zu aktivieren._',
    terminate: '🔴 Beenden',
    terminate_confirm_title: '⚠️ *Beendigung bestätigen*',
    terminate_confirm_message:
      'Bist du sicher, dass du die aktuelle Bot-Sitzung beenden möchtest?\n\nDas führt zu:\n• Löschen deiner aktuellen Sitzung\n• Zurücksetzen der Spracheinstellungen\n• Zurück zum Anfangszustand\n\nDu kannst den Bot jederzeit mit /start neu starten.',
    terminate_success:
      '✅ *Sitzung beendet*\n\nDeine Sitzung wurde erfolgreich beendet.\nAlle Einstellungen wurden zurückgesetzt.\n\nVerwende /start, um den Bot erneut zu starten.',
    terminate_cancelled:
      '✅ *Beendigung abgebrochen*\n\nDeine Sitzung ist weiterhin aktiv.\nDu kannst den Bot wie gewohnt weiterverwenden.',
    confirm_terminate: 'Ja, beenden',
    cancel_terminate: 'Abbrechen',
  },
  FR: {
    welcome:
      '🎉 Bienvenue sur le bot VST !\n\nJe suis là pour vous aider à utiliser notre extension VSCode pour surveiller les employés.\n\nVeuillez choisir votre langue préférée ci-dessous :',
    help: `🤖 *Commandes et fonctionnalités du bot*

🔹 /start - Message de bienvenue et choix de la langue  
🔹 /help - Afficher cette liste d'aide  
🔹 /language - Changer la langue du bot  
🔹 /addtogroup - Ajouter le bot à un groupe  
🔹 /instructions - Instructions détaillées du bot  
🔹 /creator - À propos du créateur du bot  
🔹 /terminate - Terminer la session en cours

Choisissez ce dont vous avez besoin dans la liste ci-dessous ! 👇`,
    language_selected: '✅ La langue a été définie sur le français',
    choose_language: '🌍 Veuillez choisir votre langue préférée :',
    add_to_group: '👥 Ajouter le bot au groupe',
    add_to_channel: '📢 Ajouter au canal',
    instructions_title: '📋 *Instructions et guide du bot*',
    instructions_content: `🔸 *Comment utiliser ce bot :*

1️⃣ **Commencer** : Utilisez /start pour démarrer et choisir votre langue  
2️⃣ **Aide** : Utilisez /help pour voir les commandes disponibles  
3️⃣ **Langue** : Changez la langue à tout moment avec /language  
4️⃣ **Groupes** : Ajoutez le bot à un groupe avec /addtogroup  
5️⃣ **Instructions** : Pour une aide détaillée, utilisez /instructions

🔸 **À propos de l'extension VST :**  
VST est une extension VSCode qui permet de surveiller les employés pendant qu’ils travaillent sur les projets de l’entreprise.  
Le bot envoie des messages (dans un canal ou un groupe) avec des logs lorsque le développeur effectue une *sauvegarde (save)* d’un fichier.  
L’extension fonctionne également avec GitHub Actions, et les actions suivantes seront bientôt prises en charge par un autre bot :  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Besoin d’aide supplémentaire ? Contactez le développeur ! 👨‍💻`,
    creator_info_title: '👨‍💻 *À propos du créateur*',
    creator_info_content: `🔸 *Informations sur le développeur :*

👤 **Nom** : Mahmoud Walid  
🔗 **Nom d'utilisateur** : ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Spécialité** : Développeur React - Frontend  
⚡ **Expérience** : Plus de 3 ans en développement web  
🌍 **Localisation** : Égypte  
🛠️ **GitHub** : [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)** : [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **À propos de l'extension VST :**  
VST est une extension VSCode qui permet de surveiller les employés pendant qu’ils travaillent sur les projets de l’entreprise.  
Le bot envoie des messages (dans un canal ou un groupe) avec des logs lorsque le développeur effectue une *sauvegarde (save)* d’un fichier.  
L’extension fonctionne également avec GitHub Actions, et les actions suivantes seront bientôt prises en charge par un autre bot :  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

N'hésitez pas à le contacter pour toute collaboration ou question ! 🚀

**Contact** : ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Fonctionnalités du bot',
    how_to_use: '❓ Comment utiliser',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Retour au menu',
    main_menu: '🏠 Menu principal',
    language_settings: '🌍 Paramètres de langue',
    about_creator: '👨‍💻 À propos du créateur',
    bot_instructions: '📋 Instructions',
    unknown_command:
      '❓ Commande inconnue. Utilisez /help pour voir les commandes disponibles.',
    error_occurred: '❌ Une erreur est survenue. Veuillez réessayer.',
    language_changed: '✅ Langue changée avec succès !',
    welcome_group:
      '🎉 Merci de m’avoir ajouté à ce groupe !\n\nUtilisez /help pour voir ce que je peux faire !',
    thanks_for_adding: '🙏 Merci de m’avoir ajouté !',
    add_to_group_message:
      '🚀 *Ajoutez-moi à votre groupe ou canal !*\n\nUtilisez les boutons ci-dessous pour m’ajouter :',
    add_to_channel_instruction:
      '_Pour les canaux : après m’avoir ajouté en tant qu’administrateur, envoyez `/start` dans le canal pour m’activer._',
    terminate: '🔴 Terminer',
    terminate_confirm_title: '⚠️ *Confirmation de la terminaison*',
    terminate_confirm_message:
      'Êtes-vous sûr de vouloir mettre fin à la session du bot ?\n\nCela entraînera :\n• La suppression de votre session actuelle\n• La réinitialisation des préférences linguistiques\n• Le retour à l’état initial\n\nVous pouvez redémarrer le bot à tout moment avec /start.',
    terminate_success:
      '✅ *Session terminée*\n\nVotre session a été terminée avec succès.\nToutes les préférences ont été réinitialisées.\n\nUtilisez /start pour redémarrer le bot.',
    terminate_cancelled:
      '✅ *Terminaison annulée*\n\nVotre session est toujours active.\nVous pouvez continuer à utiliser le bot normalement.',
    confirm_terminate: 'Oui, terminer',
    cancel_terminate: 'Annuler',
  },
  IT: {
    welcome:
      '🎉 Benvenuto nel bot VST!\n\nSono qui per aiutarti a utilizzare la nostra estensione VSCode per monitorare i dipendenti.\n\nSeleziona la tua lingua preferita qui sotto:',
    help: `🤖 *Comandi e funzionalità del bot*

🔹 /start - Messaggio di benvenuto e selezione della lingua  
🔹 /help - Mostra questo elenco di aiuto  
🔹 /language - Cambia la lingua del bot  
🔹 /addtogroup - Aggiungi il bot a un gruppo  
🔹 /instructions - Istruzioni dettagliate del bot  
🔹 /creator - Informazioni sul creatore del bot  
🔹 /terminate - Termina la sessione attuale

Scegli quello di cui hai bisogno dal menu qui sotto! 👇`,
    language_selected: '✅ Lingua impostata su italiano',
    choose_language: '🌍 Seleziona la tua lingua preferita:',
    add_to_group: '👥 Aggiungi il bot al gruppo',
    add_to_channel: '📢 Aggiungi al canale',
    instructions_title: '📋 *Istruzioni e guida del bot*',
    instructions_content: `🔸 *Come usare questo bot:*

1️⃣ **Inizio**: Usa /start per iniziare e scegliere la lingua  
2️⃣ **Aiuto**: Usa /help per vedere i comandi disponibili  
3️⃣ **Lingua**: Cambia la lingua in qualsiasi momento con /language  
4️⃣ **Gruppi**: Aggiungi il bot ai gruppi con /addtogroup  
5️⃣ **Istruzioni**: Ottieni aiuto dettagliato con /instructions

🔸 **Informazioni sull'estensione VST:**  
VST è un'estensione per VSCode che monitora i dipendenti mentre lavorano sui progetti aziendali.  
Il bot invia messaggi (in gruppi o canali) contenenti log ogni volta che uno sviluppatore *salva (save)* un file.  
L'estensione funziona anche con GitHub Actions, e presto verranno supportate anche le seguenti azioni tramite un altro bot:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Hai bisogno di ulteriore assistenza? Contatta lo sviluppatore! 👨‍💻`,
    creator_info_title: '👨‍💻 *Informazioni sul creatore*',
    creator_info_content: `🔸 *Informazioni sullo sviluppatore:*

👤 **Nome**: Mahmoud Walid  
🔗 **Username**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Specializzazione**: Sviluppatore React - Frontend  
⚡ **Esperienza**: Oltre 3 anni nello sviluppo web  
🌍 **Posizione**: Egitto  
🛠️ **GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **Informazioni sull'estensione VST:**  
VST è un'estensione per VSCode che monitora i dipendenti mentre lavorano sui progetti aziendali.  
Il bot invia messaggi (in gruppi o canali) contenenti log ogni volta che uno sviluppatore *salva (save)* un file.  
L'estensione funziona anche con GitHub Actions, e presto verranno supportate anche le seguenti azioni tramite un altro bot:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Non esitare a contattarlo per collaborazioni o domande! 🚀

**Contatto**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Funzionalità del bot',
    how_to_use: '❓ Come si usa',
    support_info: '🆘 Supporto',
    back_to_menu: '⬅️ Torna al menu',
    main_menu: '🏠 Menu principale',
    language_settings: '🌍 Impostazioni lingua',
    about_creator: '👨‍💻 Informazioni sul creatore',
    bot_instructions: '📋 Istruzioni',
    unknown_command:
      '❓ Comando sconosciuto. Usa /help per vedere i comandi disponibili.',
    error_occurred: '❌ Si è verificato un errore. Riprova.',
    language_changed: '✅ Lingua cambiata con successo!',
    welcome_group:
      '🎉 Grazie per avermi aggiunto a questo gruppo!\n\nUsa /help per vedere cosa posso fare!',
    thanks_for_adding: '🙏 Grazie per avermi aggiunto!',
    add_to_group_message:
      '🚀 *Aggiungimi al tuo gruppo o canale!*\n\nUsa i pulsanti qui sotto per aggiungermi:',
    add_to_channel_instruction:
      '_Per i canali: dopo avermi aggiunto come amministratore, invia `/start` nel canale per attivarmi._',
    terminate: '🔴 Termina',
    terminate_confirm_title: '⚠️ *Conferma della terminazione*',
    terminate_confirm_message:
      'Sei sicuro di voler terminare la sessione del bot?\n\nQuesto comporterà:\n• Cancellazione della sessione corrente\n• Ripristino delle preferenze linguistiche\n• Ritorno allo stato iniziale\n\nPuoi riavviare il bot in qualsiasi momento usando /start.',
    terminate_success:
      '✅ *Sessione terminata*\n\nLa tua sessione è stata terminata con successo.\nTutte le preferenze sono state resettate.\n\nPer riavviare il bot, usa /start.',
    terminate_cancelled:
      '✅ *Terminazione annullata*\n\nLa tua sessione è ancora attiva.\nPuoi continuare a usare il bot normalmente.',
    confirm_terminate: 'Sì, termina',
    cancel_terminate: 'Annulla',
  },
  JA: {
    welcome:
      '🎉 VSTボットへようこそ！\n\n社員の監視に使うVSCode拡張機能のご利用をお手伝いします。\n\n以下からご希望の言語を選択してください：',
    help: `🤖 *ボットのコマンドと機能*

🔹 /start - 歓迎メッセージと言語選択  
🔹 /help - このヘルプリストを表示  
🔹 /language - ボットの言語を変更  
🔹 /addtogroup - ボットをグループに追加  
🔹 /instructions - 詳細なボットの説明  
🔹 /creator - ボットの作成者について  
🔹 /terminate - 現在のセッションを終了

以下のリストから必要なものを選択してください！ 👇`,
    language_selected: '✅ 言語が日本語に設定されました',
    choose_language: '🌍 お好きな言語を選んでください：',
    add_to_group: '👥 ボットをグループに追加',
    add_to_channel: '📢 チャンネルに追加',
    instructions_title: '📋 *ボットの使い方とガイド*',
    instructions_content: `🔸 *このボットの使い方：*

1️⃣ **開始**: /start を使って開始し、言語を選択  
2️⃣ **ヘルプ**: /help でコマンド一覧を見る  
3️⃣ **言語**: /language でいつでも言語を変更  
4️⃣ **グループ**: /addtogroup でボットをグループに追加  
5️⃣ **説明**: /instructions で詳細なヘルプを取得

🔸 **VST拡張機能について:**  
VSTはVSCodeの拡張機能で、社員が会社のプロジェクトに取り組んでいる間を監視します。  
開発者がファイルを *保存（save）* すると、ログ付きのメッセージを（チャンネルまたはグループに）送信します。  
GitHub Actionsとも連携しており、まもなく別のボットで以下の操作の送信もサポート予定です：  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

さらにサポートが必要ですか？開発者に連絡してください！ 👨‍💻`,
    creator_info_title: '👨‍💻 *作成者について*',
    creator_info_content: `🔸 *開発者情報：*

👤 **名前**: Mahmoud Walid  
🔗 **ユーザー名**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **専門分野**: React開発者 - フロントエンド  
⚡ **経験**: ウェブ開発3年以上  
🌍 **所在地**: エジプト  
🛠️ **GitHubアカウント**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **VST拡張機能について:**  
VSTはVSCodeの拡張機能で、社員が会社のプロジェクトに取り組んでいる間を監視します。  
開発者がファイルを *保存（save）* すると、ログ付きのメッセージを（チャンネルまたはグループに）送信します。  
GitHub Actionsとも連携しており、まもなく別のボットで以下の操作の送信もサポート予定です：  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

質問やコラボレーションのご連絡もお待ちしています！ 🚀

**連絡先**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ ボットの機能',
    how_to_use: '❓ 使い方',
    support_info: '🆘 サポート',
    back_to_menu: '⬅️ メニューに戻る',
    main_menu: '🏠 メインメニュー',
    language_settings: '🌍 言語設定',
    about_creator: '👨‍💻 作成者について',
    bot_instructions: '📋 説明',
    unknown_command:
      '❓ 不明なコマンドです。/help を使って利用可能なコマンドを確認してください。',
    error_occurred: '❌ エラーが発生しました。もう一度お試しください。',
    language_changed: '✅ 言語が正常に変更されました！',
    welcome_group:
      '🎉 グループに追加してくれてありがとうございます！\n\n/help を使って私の機能を確認してください！',
    thanks_for_adding: '🙏 追加してくれてありがとうございます！',
    add_to_group_message:
      '🚀 *グループまたはチャンネルに追加してください！*\n\n下のボタンから追加できます：',
    add_to_channel_instruction:
      '_チャンネルの場合：管理者として追加後、チャンネルで `/start` を送信して有効化してください._',
    terminate: '🔴 終了',
    terminate_confirm_title: '⚠️ *終了の確認*',
    terminate_confirm_message:
      '本当にボットのセッションを終了してよろしいですか？\n\nこれにより：\n• 現在のセッションが消去されます\n• 言語設定がリセットされます\n• 初期状態に戻ります\n\nいつでも /start で再開できます。',
    terminate_success:
      '✅ *セッション終了*\n\nセッションが正常に終了しました。\nすべての設定がリセットされました。\n\n再起動するには /start を使ってください。',
    terminate_cancelled:
      '✅ *終了がキャンセルされました*\n\nセッションはまだアクティブです。\n通常通りボットを使い続けられます。',
    confirm_terminate: 'はい、終了します',
    cancel_terminate: 'キャンセル',
  },
  KO: {
    welcome:
      '🎉 VST 봇에 오신 것을 환영합니다!\n\n저희 VSCode 확장 프로그램을 사용하여 직원 모니터링을 도와드리겠습니다.\n\n아래에서 선호하는 언어를 선택하세요:',
    help: `🤖 *봇 명령어 및 기능*

🔹 /start - 환영 메시지 및 언어 선택  
🔹 /help - 이 도움말 목록 보기  
🔹 /language - 봇 언어 변경  
🔹 /addtogroup - 그룹에 봇 추가  
🔹 /instructions - 자세한 봇 사용법  
🔹 /creator - 봇 제작자 정보  
🔹 /terminate - 현재 세션 종료

아래 메뉴에서 필요한 항목을 선택하세요! 👇`,
    language_selected: '✅ 언어가 한국어로 설정되었습니다',
    choose_language: '🌍 선호하는 언어를 선택하세요:',
    add_to_group: '👥 봇을 그룹에 추가',
    add_to_channel: '📢 채널에 추가',
    instructions_title: '📋 *봇 사용법 및 가이드*',
    instructions_content: `🔸 *이 봇 사용 방법:*

1️⃣ **시작하기**: /start 명령어로 시작하고 언어 선택  
2️⃣ **도움말**: /help 명령어로 명령어 목록 확인  
3️⃣ **언어 변경**: /language 명령어로 언제든 언어 변경  
4️⃣ **그룹 추가**: /addtogroup 명령어로 그룹에 봇 추가  
5️⃣ **상세 안내**: /instructions 명령어로 상세 도움말 확인

🔸 **VST 확장 프로그램에 대하여:**  
VST는 VSCode 확장 프로그램으로, 직원들이 회사 프로젝트 작업 중일 때 모니터링합니다.  
개발자가 파일을 *저장(save)* 할 때마다 로그가 포함된 메시지를 (채널 또는 그룹에) 전송합니다.  
GitHub Actions와도 연동되며, 곧 다른 봇을 통해 아래 작업도 지원할 예정입니다:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

추가 지원이 필요하시면 개발자에게 연락하세요! 👨‍💻`,
    creator_info_title: '👨‍💻 *제작자 정보*',
    creator_info_content: `🔸 *개발자 정보:*

👤 **이름**: Mahmoud Walid  
🔗 **사용자 이름**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **전문 분야**: React 개발자 - 프론트엔드  
⚡ **경력**: 웹 개발 3년 이상  
🌍 **위치**: 이집트  
🛠️ **GitHub 계정**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **VST 확장 프로그램에 대하여:**  
VST는 VSCode 확장 프로그램으로, 직원들이 회사 프로젝트 작업 중일 때 모니터링합니다.  
개발자가 파일을 *저장(save)* 할 때마다 로그가 포함된 메시지를 (채널 또는 그룹에) 전송합니다.  
GitHub Actions와도 연동되며, 곧 다른 봇을 통해 아래 작업도 지원할 예정입니다:  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

협업이나 문의가 있으면 언제든 연락하세요! 🚀

**연락처**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ 봇 기능',
    how_to_use: '❓ 사용 방법',
    support_info: '🆘 지원',
    back_to_menu: '⬅️ 메뉴로 돌아가기',
    main_menu: '🏠 메인 메뉴',
    language_settings: '🌍 언어 설정',
    about_creator: '👨‍💻 제작자 정보',
    bot_instructions: '📋 안내',
    unknown_command:
      '❓ 알 수 없는 명령어입니다. /help 명령어로 사용 가능한 명령어를 확인하세요.',
    error_occurred: '❌ 오류가 발생했습니다. 다시 시도해주세요.',
    language_changed: '✅ 언어가 성공적으로 변경되었습니다!',
    welcome_group:
      '🎉 그룹에 추가해 주셔서 감사합니다!\n\n/help 명령어로 제가 할 수 있는 일을 확인하세요!',
    thanks_for_adding: '🙏 추가해 주셔서 감사합니다!',
    add_to_group_message:
      '🚀 *그룹이나 채널에 저를 추가하세요!*\n\n아래 버튼을 사용해 추가할 수 있습니다:',
    add_to_channel_instruction:
      '_채널의 경우: 관리자 권한으로 추가한 후, 채널에서 `/start` 명령어를 보내 활성화하세요._',
    terminate: '🔴 종료',
    terminate_confirm_title: '⚠️ *종료 확인*',
    terminate_confirm_message:
      '봇 세션을 종료하시겠습니까?\n\n이 작업은 다음을 수행합니다:\n• 현재 세션 삭제\n• 언어 설정 초기화\n• 초기 상태로 복원\n\n언제든지 /start 명령어로 다시 시작할 수 있습니다.',
    terminate_success:
      '✅ *세션 종료 완료*\n\n세션이 성공적으로 종료되었습니다.\n모든 설정이 초기화되었습니다.\n\n봇을 재시작하려면 /start 명령어를 사용하세요.',
    terminate_cancelled:
      '✅ *종료가 취소되었습니다*\n\n세션이 계속 활성화되어 있습니다.\n계속해서 봇을 사용할 수 있습니다.',
    confirm_terminate: '예, 종료합니다',
    cancel_terminate: '취소',
  },
  ZH: {
    welcome:
      '🎉 欢迎使用 VST 机器人！\n\n我会帮助您使用我们专为员工监控设计的 VSCode 扩展。\n\n请选择您喜欢的语言：',
    help: `🤖 *机器人命令与功能*

🔹 /start - 欢迎信息及语言选择  
🔹 /help - 显示此帮助列表  
🔹 /language - 更改机器人语言  
🔹 /addtogroup - 将机器人添加到群组  
🔹 /instructions - 机器人详细说明  
🔹 /creator - 关于机器人创建者  
🔹 /terminate - 结束当前会话

请从下方列表选择所需项！👇`,
    language_selected: '✅ 语言已设置为中文',
    choose_language: '🌍 请选择您喜欢的语言：',
    add_to_group: '👥 添加机器人到群组',
    add_to_channel: '📢 添加到频道',
    instructions_title: '📋 *机器人使用说明与指南*',
    instructions_content: `🔸 *如何使用此机器人：*

1️⃣ **开始**：使用 /start 启动并选择语言  
2️⃣ **帮助**：使用 /help 查看命令列表  
3️⃣ **语言**：随时使用 /language 更改语言  
4️⃣ **群组**：使用 /addtogroup 将机器人添加到群组  
5️⃣ **说明**：使用 /instructions 获取详细帮助

🔸 **关于 VST 扩展：**  
VST 是一款 VSCode 扩展，用于监控员工在公司项目中的工作情况。  
当开发者保存文件时，机器人会在频道或群组中发送包含日志的消息。  
扩展还与 GitHub Actions 集成，未来会通过另一个机器人支持发送以下操作消息（即将推出）：  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

需要更多帮助？请联系开发者！👨‍💻`,
    creator_info_title: '👨‍💻 *关于机器人创建者*',
    creator_info_content: `🔸 *开发者信息：*

👤 **姓名**：Mahmoud Walid  
🔗 **用户名**：${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **专业**：React 开发 - 前端  
⚡ **经验**：3年以上网页开发经验  
🌍 **地点**：埃及  
🛠️ **GitHub 账号**：[Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**：[mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **关于 VST 扩展：**  
VST 是一款 VSCode 扩展，用于监控员工在公司项目中的工作情况。  
当开发者保存文件时，机器人会在频道或群组中发送包含日志的消息。  
扩展还与 GitHub Actions 集成，未来会通过另一个机器人支持发送以下操作消息（即将推出）：  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

欢迎随时联系合作或提问！🚀

**联系方式**：${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ 机器人功能',
    how_to_use: '❓ 使用方法',
    support_info: '🆘 支持',
    back_to_menu: '⬅️ 返回菜单',
    main_menu: '🏠 主菜单',
    language_settings: '🌍 语言设置',
    about_creator: '👨‍💻 关于开发者',
    bot_instructions: '📋 说明',
    unknown_command: '❓ 未知命令。请使用 /help 查看可用命令。',
    error_occurred: '❌ 出现错误。请重试。',
    language_changed: '✅ 语言已成功更改！',
    welcome_group: '🎉 感谢将我添加到此群组！\n\n使用 /help 查看我能做什么！',
    thanks_for_adding: '🙏 感谢添加我！',
    add_to_group_message:
      '🚀 *请将我添加到您的群组或频道！*\n\n使用下面的按钮进行添加：',
    add_to_channel_instruction:
      '_对于频道：作为管理员添加后，请在频道发送 `/start` 以激活我。_',
    terminate: '🔴 结束',
    terminate_confirm_title: '⚠️ *结束确认*',
    terminate_confirm_message:
      '您确定要结束机器人会话吗？\n\n这将执行以下操作：\n• 清除当前会话\n• 重置语言偏好设置\n• 恢复初始状态\n\n您可以随时使用 /start 重新开始。',
    terminate_success:
      '✅ *会话已结束*\n\n您的会话已成功结束。\n所有偏好设置已重置。\n\n要重新启动机器人，请使用 /start 命令。',
    terminate_cancelled:
      '✅ *结束已取消*\n\n您的会话仍处于活动状态。\n您可以继续正常使用机器人。',
    confirm_terminate: '是，结束',
    cancel_terminate: '取消',
  },
  'PT-BR': {
    welcome:
      '🎉 Bem-vindo ao bot VST!\n\nEstou aqui para ajudar você a usar nossa extensão VSCode para monitorar funcionários.\n\nEscolha seu idioma preferido abaixo:',
    help: `🤖 *Comandos e funcionalidades do bot*

🔹 /start - Mensagem de boas-vindas e seleção de idioma  
🔹 /help - Exibe esta lista de ajuda  
🔹 /language - Alterar idioma do bot  
🔹 /addtogroup - Adicionar o bot a um grupo  
🔹 /instructions - Instruções detalhadas do bot  
🔹 /creator - Sobre o criador do bot  
🔹 /terminate - Encerrar sessão atual

Escolha o que você precisa na lista abaixo! 👇`,
    language_selected: '✅ Idioma definido para Português (Brasil)',
    choose_language: '🌍 Escolha seu idioma preferido:',
    add_to_group: '👥 Adicionar o bot ao grupo',
    add_to_channel: '📢 Adicionar ao canal',
    instructions_title: '📋 *Instruções e guia do bot*',
    instructions_content: `🔸 *Como usar este bot:*

1️⃣ **Comece**: Use /start para iniciar e escolher o idioma  
2️⃣ **Ajuda**: Use /help para ver os comandos  
3️⃣ **Idioma**: Altere o idioma a qualquer momento com /language  
4️⃣ **Grupos**: Adicione o bot a grupos usando /addtogroup  
5️⃣ **Instruções**: Obtenha ajuda detalhada com /instructions

🔸 **Sobre a extensão VST:**  
VST é uma extensão VSCode que monitora os funcionários enquanto trabalham nos projetos da empresa.  
O bot envia mensagens (no canal ou grupo) contendo logs quando o desenvolvedor faz *save* no arquivo.  
A extensão também funciona com GitHub Actions, e em breve suportará envio das seguintes operações via outro bot (em breve):  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Precisa de mais ajuda? Entre em contato com o desenvolvedor! 👨‍💻`,
    creator_info_title: '👨‍💻 *Sobre o criador do bot*',
    creator_info_content: `🔸 *Informações do desenvolvedor:*

👤 **Nome**: Mahmoud Walid  
🔗 **Usuário**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}  
💻 **Especialidade**: Desenvolvedor React - Frontend  
⚡ **Experiência**: Mais de 3 anos em desenvolvimento web  
🌍 **Localização**: Egito  
🛠️ **Conta no GitHub**: [Mahmoud-walid](https://github.com/Mahmoud-walid)  
🎯 **X (Twitter)**: [mahmoudWalid\_JS](https://x.com/mahmoudWalid_JS)

🔸 **Sobre a extensão VST:**  
VST é uma extensão VSCode que monitora os funcionários enquanto trabalham nos projetos da empresa.  
O bot envia mensagens (no canal ou grupo) contendo logs quando o desenvolvedor faz *save* no arquivo.  
A extensão também funciona com GitHub Actions, e em breve suportará envio das seguintes operações via outro bot (em breve):  
- commit  
- push  
- pull  
- new branch  
- PR  
- issue  

Não hesite em contatar para colaboração ou dúvidas! 🚀

**Contato**: ${ENV.CREATOR_USERNAME.replace(/_/g, '\\_')}`,
    bot_features: '⭐ Funcionalidades do bot',
    how_to_use: '❓ Como usar',
    support_info: '🆘 Suporte',
    back_to_menu: '⬅️ Voltar ao menu',
    main_menu: '🏠 Menu principal',
    language_settings: '🌍 Configurações de idioma',
    about_creator: '👨‍💻 Sobre o criador',
    bot_instructions: '📋 Instruções',
    unknown_command:
      '❓ Comando desconhecido. Use /help para ver os comandos disponíveis.',
    error_occurred: '❌ Ocorreu um erro. Por favor, tente novamente.',
    language_changed: '✅ Idioma alterado com sucesso!',
    welcome_group:
      '🎉 Obrigado por me adicionar a este grupo!\n\nUse /help para ver o que posso fazer!',
    thanks_for_adding: '🙏 Obrigado por me adicionar!',
    add_to_group_message:
      '🚀 *Adicione-me ao seu grupo ou canal!*\n\nUse os botões abaixo para me adicionar:',
    add_to_channel_instruction:
      '_Para canais: após adicionar como administrador, envie `/start` no canal para me ativar._',
    terminate: '🔴 Encerrar',
    terminate_confirm_title: '⚠️ *Confirmação de encerramento*',
    terminate_confirm_message:
      'Tem certeza de que deseja encerrar a sessão do bot?\n\nIsso fará o seguinte:\n• Apagar sua sessão atual\n• Resetar preferências de idioma\n• Retornar ao estado inicial\n\nVocê pode reiniciar a qualquer momento usando /start',
    terminate_success:
      '✅ *Sessão encerrada*\n\nSua sessão foi encerrada com sucesso.\nTodas as preferências foram resetadas.\n\nPara reiniciar o bot, use o comando /start.',
    terminate_cancelled:
      '✅ *Encerramento cancelado*\n\nSua sessão ainda está ativa.\nVocê pode continuar usando o bot normalmente.',
    confirm_terminate: 'Sim, encerrar',
    cancel_terminate: 'Cancelar',
  },
};

export class TranslationService {
  private static instance: TranslationService;

  private constructor() {}

  public static getInstance(): TranslationService {
    if (!TranslationService.instance) {
      TranslationService.instance = new TranslationService();
    }
    return TranslationService.instance;
  }

  public translate(key: keyof BotTranslations, language: LanguageKey): string {
    const translation = translations[language]?.[key] || translations.EN[key];
    return translation || `Translation missing for key: ${key}`;
  }

  public getAvailableLanguages(): LanguageKey[] {
    return Object.keys(translations) as LanguageKey[];
  }
}
