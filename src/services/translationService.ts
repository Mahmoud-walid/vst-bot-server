import { LanguageKey } from '../config/languages';
import { BotTranslations } from '../types/bot.types';

const translations: Record<LanguageKey, BotTranslations> = {
  EN: {
    welcome:
      "🎉 Welcome to the Advanced Bot!\n\nI'm here to help you with multiple features and support many languages.\n\nSelect your preferred language below:",
    help: `🤖 *Bot Commands & Features*

🔹 /start - Welcome message & language selection
🔹 /help - Show this help menu
🔹 /language - Change bot language
🔹 /addtogroup - Add bot to a group
🔹 /instructions - Detailed bot instructions
🔹 /creator - About the creator

🌟 *Main Features:*
• Multi-language support (13+ languages)
• Easy group/channel integration  
• User-friendly interface
• Comprehensive help system

Choose what you need from the menu below! 👇`,
    language_selected: '✅ Language set to English',
    choose_language: '🌍 Choose your preferred language:',
    add_to_group: '👥 Add Bot to Group/Channel',
    add_to_channel: '📢 Add to Channel',
    instructions_title: '📋 *Bot Instructions & Guide*',
    instructions_content: `🔸 *How to Use This Bot:*

1️⃣ **Start**: Use /start to begin and select language
2️⃣ **Help**: Use /help for commands overview  
3️⃣ **Language**: Change language anytime with /language
4️⃣ **Groups**: Add bot to groups with /addtogroup
5️⃣ **Instructions**: Get detailed help with /instructions

🔸 *Features Overview:*
• Multi-language interface (13+ languages)
• Smart command system
• Group/channel integration
• User-friendly navigation
• Instant language switching

🔸 *Tips for Best Experience:*
• Use inline keyboards for easy navigation
• Commands work in private chats and groups
• Bot remembers your language preference
• All features work across different languages

Need more help? Contact the creator! 👨‍💻`,
    creator_info_title: '👨‍💻 *About the Creator*',
    creator_info_content: `🔸 **Creator Information:**

👤 **Name**: Mahmoud Walid
🔗 **Username**: @mahmoudWalidJS
💻 **Expertise**: React Developer - Frontend
🛠️ **Tech Stack**: React, TypeScript, React Native, Node.js
⚡ **Experience**: 3+ years in web development
🌍 **Location**: Egypt
🎯 **Passion**: JavaScript, TypeScript, and Modern Web Technologies

🔸 **About This Project:**
This bot was created using modern TypeScript and Telegraf framework, featuring advanced architecture with proper type safety and multi-language support.

Feel free to reach out for collaborations or questions! 🚀

**Contact**: @mahmoudWalidJS`,
    bot_features: '⭐ Bot Features',
    how_to_use: '❓ How to Use',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Back to Menu',
    main_menu: '🏠 Main Menu',
    language_settings: '🌍 Language Settings',
    about_creator: '👨‍💻 About Creator',
    bot_instructions: '📋 Instructions',
    unknown_command: '❓ Unknown command. Use /help to see available commands.',
    error_occurred: '❌ An error occurred. Please try again.',
    language_changed: '✅ Language successfully changed!',
    welcome_group:
      '🎉 Thanks for adding me to this group!\n\nUse /help to see what I can do!',
    thanks_for_adding: '🙏 Thank you for adding me!',
  },
  AR: {
    welcome:
      '🎉 أهلاً بك في البوت المتطور!\n\nأنا هنا لمساعدتك بميزات متعددة ودعم العديد من اللغات.\n\nاختر لغتك المفضلة أدناه:',
    help: `🤖 *أوامر ومميزات البوت*

🔹 /start - رسالة الترحيب واختيار اللغة
🔹 /help - عرض قائمة المساعدة هذه
🔹 /language - تغيير لغة البوت
🔹 /addtogroup - إضافة البوت لمجموعة
🔹 /instructions - تعليمات البوت المفصلة
🔹 /creator - عن صانع البوت

🌟 *المميزات الرئيسية:*
• دعم متعدد اللغات (+13 لغة)
• تكامل سهل مع المجموعات/القنوات
• واجهة سهلة الاستخدام  
• نظام مساعدة شامل

اختر ما تحتاجه من القائمة أدناه! 👇`,
    language_selected: '✅ تم تعيين اللغة إلى العربية',
    choose_language: '🌍 اختر لغتك المفضلة:',
    add_to_group: '👥 إضافة البوت للمجموعة/القناة',
    add_to_channel: '📢 إضافة للقناة',
    instructions_title: '📋 *تعليمات ودليل البوت*',
    instructions_content: `🔸 *كيفية استخدام هذا البوت:*

1️⃣ **البداية**: استخدم /start للبدء واختيار اللغة
2️⃣ **المساعدة**: استخدم /help لنظرة عامة على الأوامر
3️⃣ **اللغة**: غير اللغة في أي وقت باستخدام /language
4️⃣ **المجموعات**: أضف البوت للمجموعات باستخدام /addtogroup
5️⃣ **التعليمات**: احصل على مساعدة مفصلة باستخدام /instructions

🔸 *نظرة على المميزات:*
• واجهة متعددة اللغات (+13 لغة)
• نظام أوامر ذكي
• تكامل المجموعات/القنوات
• تنقل سهل للمستخدم
• تبديل فوري للغة

🔸 *نصائح لأفضل تجربة:*
• استخدم لوحات المفاتيح للتنقل السهل
• الأوامر تعمل في المحادثات الخاصة والمجموعات
• البوت يتذكر تفضيل لغتك
• جميع المميزات تعمل عبر اللغات المختلفة

تحتاج مساعدة أكثر؟ تواصل مع المطور! 👨‍💻`,
    creator_info_title: '👨‍💻 *عن صانع البوت*',
    creator_info_content: `🔸 **معلومات المطور:**

👤 **الاسم**: محمود وليد
🔗 **اسم المستخدم**: @mahmoudWalidJS
💻 **التخصص**: مطور React - الواجهات الأمامية
🛠️ **التقنيات**: React, TypeScript, React Native, Node.js
⚡ **الخبرة**: أكثر من 3 سنوات في تطوير الويب
🌍 **الموقع**: مصر
🎯 **الشغف**: JavaScript, TypeScript, وتقنيات الويب الحديثة

🔸 **عن هذا المشروع:**
تم إنشاء هذا البوت باستخدام TypeScript الحديث وإطار عمل Telegraf، مع هندسة متقدمة وأمان نوعي كامل ودعم متعدد اللغات.

لا تتردد في التواصل للتعاون أو الأسئلة! 🚀

**للتواصل**: @mahmoudWalidJS`,
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
  },
  RU: {
    welcome:
      '🎉 Добро пожаловать в продвинутый бот!\n\nЯ здесь, чтобы помочь вам с множественными функциями и поддерживаю много языков.\n\nВыберите предпочитаемый язык ниже:',
    help: `🤖 *Команды и функции бота*

🔹 /start - Приветственное сообщение и выбор языка
🔹 /help - Показать это меню помощи
🔹 /language - Изменить язык бота
🔹 /addtogroup - Добавить бота в группу
🔹 /instructions - Подробные инструкции бота
🔹 /creator - О создателе

🌟 *Основные функции:*
• Поддержка многих языков (13+ языков)
• Легкая интеграция с группами/каналами
• Удобный интерфейс
• Комплексная система помощи

Выберите то, что вам нужно, из меню ниже! 👇`,
    language_selected: '✅ Язык установлен на русский',
    choose_language: '🌍 Выберите предпочитаемый язык:',
    add_to_group: '👥 Добавить бота в группу/канал',
    add_to_channel: '📢 Добавить в канал',
    instructions_title: '📋 *Инструкции и руководство бота*',
    instructions_content: `🔸 *Как использовать этого бота:*

1️⃣ **Начало**: Используйте /start для начала и выбора языка
2️⃣ **Помощь**: Используйте /help для обзора команд
3️⃣ **Язык**: Меняйте язык в любое время с /language
4️⃣ **Группы**: Добавляйте бота в группы с /addtogroup
5️⃣ **Инструкции**: Получите подробную помощь с /instructions

🔸 *Обзор функций:*
• Многоязычный интерфейс (13+ языков)
• Умная система команд
• Интеграция с группами/каналами
• Удобная навигация для пользователя
• Мгновенное переключение языка

🔸 *Советы для лучшего опыта:*
• Используйте встроенные клавиатуры для легкой навигации
• Команды работают в личных чатах и группах
• Бот запоминает ваши языковые предпочтения
• Все функции работают на разных языках

Нужна дополнительная помощь? Свяжитесь с создателем! 👨‍💻`,
    creator_info_title: '👨‍💻 *О создателе*',
    creator_info_content: `🔸 **Информация о создателе:**

👤 **Имя**: Махмуд Валид
🔗 **Имя пользователя**: @mahmoudWalidJS
💻 **Специализация**: React разработчик - Frontend
🛠️ **Технологический стек**: React, TypeScript, React Native, Node.js
⚡ **Опыт**: 3+ года в веб-разработке
🌍 **Местоположение**: Египет
🎯 **Увлечение**: JavaScript, TypeScript и современные веб-технологии

🔸 **О этом проекте:**
Этот бот был создан с использованием современного TypeScript и фреймворка Telegraf, с продвинутой архитектурой и полной типовой безопасностью и многоязычной поддержкой.

Не стесняйтесь обращаться для сотрудничества или вопросов! 🚀

**Контакт**: @mahmoudWalidJS`,
    bot_features: '⭐ Функции бота',
    how_to_use: '❓ Как использовать',
    support_info: '🆘 Поддержка',
    back_to_menu: '⬅️ Назад в меню',
    main_menu: '🏠 Главное меню',
    language_settings: '🌍 Настройки языка',
    about_creator: '👨‍💻 О создателе',
    bot_instructions: '📋 Инструкции',
    unknown_command:
      '❓ Неизвестная команда. Используйте /help для просмотра доступных команд.',
    error_occurred: '❌ Произошла ошибка. Пожалуйста, попробуйте еще раз.',
    language_changed: '✅ Язык успешно изменен!',
    welcome_group:
      '🎉 Спасибо за добавление меня в эту группу!\n\nИспользуйте /help чтобы увидеть что я могу делать!',
    thanks_for_adding: '🙏 Спасибо за добавление меня!',
  },
  // adding shortened versions for other languages to keep the artifact manageable
  ES: {
    welcome:
      '🎉 ¡Bienvenido al Bot Avanzado!\n\nEstoy aquí para ayudarte con múltiples funciones y soporte de muchos idiomas.\n\nSelecciona tu idioma preferido abajo:',
    help: `🤖 *Comandos y funciones del bot*\n\n🔹 /start - Mensaje de bienvenida\n🔹 /help - Mostrar menú de ayuda\n🔹 /language - Cambiar idioma\n🔹 /addtogroup - Añadir bot al grupo\n🔹 /instructions - Instrucciones detalladas\n🔹 /creator - Sobre el creador`,
    language_selected: '✅ Idioma establecido en español',
    choose_language: '🌍 Elige tu idioma preferido:',
    add_to_group: '👥 Añadir Bot al Grupo/Canal',
    add_to_channel: '📢 Añadir al Canal',
    instructions_title: '📋 *Instrucciones del Bot*',
    instructions_content: 'Instrucciones detalladas sobre cómo usar el bot...',
    creator_info_title: '👨‍💻 *Sobre el Creador*',
    creator_info_content: 'Información del creador @mahmoudWalidJS...',
    bot_features: '⭐ Características',
    how_to_use: '❓ Cómo usar',
    support_info: '🆘 Soporte',
    back_to_menu: '⬅️ Volver al menú',
    main_menu: '🏠 Menú principal',
    language_settings: '🌍 Configuración de idioma',
    about_creator: '👨‍💻 Sobre el creador',
    bot_instructions: '📋 Instrucciones',
    unknown_command: '❓ Comando desconocido.',
    error_occurred: '❌ Ocurrió un error.',
    language_changed: '✅ ¡Idioma cambiado exitosamente!',
    welcome_group: '🎉 ¡Gracias por añadirme a este grupo!',
    thanks_for_adding: '🙏 ¡Gracias por añadirme!',
  },
  // adding other languages with basic translations
  PT: {
    welcome: '🎉 Bem-vindo ao Bot Avançado!',
    help: '🤖 *Comandos do Bot*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Idioma definido para português',
    choose_language: '🌍 Escolha seu idioma:',
    add_to_group: '👥 Adicionar ao Grupo',
    add_to_channel: '📢 Adicionar ao Canal',
    instructions_title: '📋 *Instruções*',
    instructions_content: 'Instruções detalhadas...',
    creator_info_title: '👨‍💻 *Sobre o Criador*',
    creator_info_content: 'Criador: @mahmoudWalidJS',
    bot_features: '⭐ Recursos',
    how_to_use: '❓ Como usar',
    support_info: '🆘 Suporte',
    back_to_menu: '⬅️ Voltar',
    main_menu: '🏠 Menu',
    language_settings: '🌍 Idioma',
    about_creator: '👨‍💻 Criador',
    bot_instructions: '📋 Instruções',
    unknown_command: '❓ Comando desconhecido',
    error_occurred: '❌ Erro',
    language_changed: '✅ Idioma alterado!',
    welcome_group: '🎉 Obrigado por me adicionar!',
    thanks_for_adding: '🙏 Obrigado!',
  },
  TR: {
    welcome: "🎉 Gelişmiş Bot'a Hoş Geldiniz!",
    help: '🤖 *Bot Komutları*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Dil Türkçe olarak ayarlandı',
    choose_language: '🌍 Dilinizi seçin:',
    add_to_group: '👥 Gruba Ekle',
    add_to_channel: '📢 Kanala Ekle',
    instructions_title: '📋 *Talimatlar*',
    instructions_content: 'Detaylı talimatlar...',
    creator_info_title: '👨‍💻 *Yaratıcı Hakkında*',
    creator_info_content: 'Yaratıcı: @mahmoudWalidJS',
    bot_features: '⭐ Özellikler',
    how_to_use: '❓ Nasıl kullanılır',
    support_info: '🆘 Destek',
    back_to_menu: '⬅️ Geri',
    main_menu: '🏠 Ana Menü',
    language_settings: '🌍 Dil',
    about_creator: '👨‍💻 Yaratıcı',
    bot_instructions: '📋 Talimatlar',
    unknown_command: '❓ Bilinmeyen komut',
    error_occurred: '❌ Hata',
    language_changed: '✅ Dil değiştirildi!',
    welcome_group: '🎉 Beni eklediğiniz için teşekkürler!',
    thanks_for_adding: '🙏 Teşekkürler!',
  },
  DE: {
    welcome: '🎉 Willkommen beim erweiterten Bot!',
    help: '🤖 *Bot-Befehle*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Sprache auf Deutsch eingestellt',
    choose_language: '🌍 Sprache wählen:',
    add_to_group: '👥 Zur Gruppe hinzufügen',
    add_to_channel: '📢 Zum Kanal hinzufügen',
    instructions_title: '📋 *Anweisungen*',
    instructions_content: 'Detaillierte Anweisungen...',
    creator_info_title: '👨‍💻 *Über den Ersteller*',
    creator_info_content: 'Ersteller: @mahmoudWalidJS',
    bot_features: '⭐ Funktionen',
    how_to_use: '❓ Verwendung',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Zurück',
    main_menu: '🏠 Hauptmenü',
    language_settings: '🌍 Sprache',
    about_creator: '👨‍💻 Ersteller',
    bot_instructions: '📋 Anweisungen',
    unknown_command: '❓ Unbekannter Befehl',
    error_occurred: '❌ Fehler',
    language_changed: '✅ Sprache geändert!',
    welcome_group: '🎉 Danke fürs Hinzufügen!',
    thanks_for_adding: '🙏 Danke!',
  },
  FR: {
    welcome: '🎉 Bienvenue dans le Bot Avancé!',
    help: '🤖 *Commandes du Bot*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Langue définie en français',
    choose_language: '🌍 Choisir la langue:',
    add_to_group: '👥 Ajouter au Groupe',
    add_to_channel: '📢 Ajouter au Canal',
    instructions_title: '📋 *Instructions*',
    instructions_content: 'Instructions détaillées...',
    creator_info_title: '👨‍💻 *À propos du Créateur*',
    creator_info_content: 'Créateur: @mahmoudWalidJS',
    bot_features: '⭐ Fonctionnalités',
    how_to_use: '❓ Utilisation',
    support_info: '🆘 Support',
    back_to_menu: '⬅️ Retour',
    main_menu: '🏠 Menu',
    language_settings: '🌍 Langue',
    about_creator: '👨‍💻 Créateur',
    bot_instructions: '📋 Instructions',
    unknown_command: '❓ Commande inconnue',
    error_occurred: '❌ Erreur',
    language_changed: '✅ Langue changée!',
    welcome_group: "🎉 Merci de m'avoir ajouté!",
    thanks_for_adding: '🙏 Merci!',
  },
  IT: {
    welcome: '🎉 Benvenuto nel Bot Avanzato!',
    help: '🤖 *Comandi del Bot*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Lingua impostata in italiano',
    choose_language: '🌍 Scegli la lingua:',
    add_to_group: '👥 Aggiungi al Gruppo',
    add_to_channel: '📢 Aggiungi al Canale',
    instructions_title: '📋 *Istruzioni*',
    instructions_content: 'Istruzioni dettagliate...',
    creator_info_title: '👨‍💻 *Sul Creatore*',
    creator_info_content: 'Creatore: @mahmoudWalidJS',
    bot_features: '⭐ Funzionalità',
    how_to_use: '❓ Come usare',
    support_info: '🆘 Supporto',
    back_to_menu: '⬅️ Indietro',
    main_menu: '🏠 Menu',
    language_settings: '🌍 Lingua',
    about_creator: '👨‍💻 Creatore',
    bot_instructions: '📋 Istruzioni',
    unknown_command: '❓ Comando sconosciuto',
    error_occurred: '❌ Errore',
    language_changed: '✅ Lingua cambiata!',
    welcome_group: '🎉 Grazie per avermi aggiunto!',
    thanks_for_adding: '🙏 Grazie!',
  },
  JA: {
    welcome: '🎉 アドバンスドボットへようこそ！',
    help: '🤖 *ボットコマンド*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ 言語が日本語に設定されました',
    choose_language: '🌍 言語を選択:',
    add_to_group: '👥 グループに追加',
    add_to_channel: '📢 チャンネルに追加',
    instructions_title: '📋 *指示*',
    instructions_content: '詳細な指示...',
    creator_info_title: '👨‍💻 *作成者について*',
    creator_info_content: '作成者: @mahmoudWalidJS',
    bot_features: '⭐ 機能',
    how_to_use: '❓ 使用方法',
    support_info: '🆘 サポート',
    back_to_menu: '⬅️ 戻る',
    main_menu: '🏠 メニュー',
    language_settings: '🌍 言語',
    about_creator: '👨‍💻 作成者',
    bot_instructions: '📋 指示',
    unknown_command: '❓ 不明なコマンド',
    error_occurred: '❌ エラー',
    language_changed: '✅ 言語が変更されました！',
    welcome_group: '🎉 追加していただきありがとうございます！',
    thanks_for_adding: '🙏 ありがとうございます！',
  },
  KO: {
    welcome: '🎉 고급 봇에 오신 것을 환영합니다!',
    help: '🤖 *봇 명령어*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ 언어가 한국어로 설정되었습니다',
    choose_language: '🌍 언어 선택:',
    add_to_group: '👥 그룹에 추가',
    add_to_channel: '📢 채널에 추가',
    instructions_title: '📋 *지시사항*',
    instructions_content: '자세한 지시사항...',
    creator_info_title: '👨‍💻 *제작자 정보*',
    creator_info_content: '제작자: @mahmoudWalidJS',
    bot_features: '⭐ 기능',
    how_to_use: '❓ 사용법',
    support_info: '🆘 지원',
    back_to_menu: '⬅️ 뒤로',
    main_menu: '🏠 메인 메뉴',
    language_settings: '🌍 언어',
    about_creator: '👨‍💻 제작자',
    bot_instructions: '📋 지시사항',
    unknown_command: '❓ 알 수 없는 명령어',
    error_occurred: '❌ 오류',
    language_changed: '✅ 언어가 변경되었습니다!',
    welcome_group: '🎉 추가해주셔서 감사합니다!',
    thanks_for_adding: '🙏 감사합니다!',
  },
  ZH: {
    welcome: '🎉 欢迎来到高级机器人！',
    help: '🤖 *机器人命令*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ 语言已设置为中文',
    choose_language: '🌍 选择语言:',
    add_to_group: '👥 添加到群组',
    add_to_channel: '📢 添加到频道',
    instructions_title: '📋 *说明*',
    instructions_content: '详细说明...',
    creator_info_title: '👨‍💻 *关于创建者*',
    creator_info_content: '创建者: @mahmoudWalidJS',
    bot_features: '⭐ 功能',
    how_to_use: '❓ 如何使用',
    support_info: '🆘 支持',
    back_to_menu: '⬅️ 返回',
    main_menu: '🏠 主菜单',
    language_settings: '🌍 语言',
    about_creator: '👨‍💻 创建者',
    bot_instructions: '📋 说明',
    unknown_command: '❓ 未知命令',
    error_occurred: '❌ 错误',
    language_changed: '✅ 语言已更改！',
    welcome_group: '🎉 谢谢添加我！',
    thanks_for_adding: '🙏 谢谢！',
  },
  'PT-BR': {
    welcome: '🎉 Bem-vindo ao Bot Avançado!',
    help: '🤖 *Comandos do Bot*\n\n/start /help /language /addtogroup /instructions /creator',
    language_selected: '✅ Idioma definido para português brasileiro',
    choose_language: '🌍 Escolha seu idioma:',
    add_to_group: '👥 Adicionar ao Grupo',
    add_to_channel: '📢 Adicionar ao Canal',
    instructions_title: '📋 *Instruções*',
    instructions_content: 'Instruções detalhadas...',
    creator_info_title: '👨‍💻 *Sobre o Criador*',
    creator_info_content: 'Criador: @mahmoudWalidJS',
    bot_features: '⭐ Recursos',
    how_to_use: '❓ Como usar',
    support_info: '🆘 Suporte',
    back_to_menu: '⬅️ Voltar',
    main_menu: '🏠 Menu Principal',
    language_settings: '🌍 Configurações de Idioma',
    about_creator: '👨‍💻 Sobre o Criador',
    bot_instructions: '📋 Instruções',
    unknown_command: '❓ Comando desconhecido',
    error_occurred: '❌ Ocorreu um erro',
    language_changed: '✅ Idioma alterado com sucesso!',
    welcome_group: '🎉 Obrigado por me adicionar ao grupo!',
    thanks_for_adding: '🙏 Obrigado por me adicionar!',
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
