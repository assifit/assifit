
export type Locale = 'en' | 'vn';

export interface FeatureContent {
  title: string;
  description: string;
}

export interface TestimonialContent {
  quote: string;
  author: string;
  age: number;
}

export interface AppTranslations {
  // Header
  navFeatures: string;
  navTestimonials: string;
  navDownload: string;
  languageLabel: string;

  // Hero
  heroHeadline: string;
  heroSubheadline: string;

  // Features
  featuresHeadline: string;
  features: FeatureContent[];

  // Testimonials
  testimonialsHeadline: string;
  testimonialAgeSuffix: string;
  testimonials: TestimonialContent[];

  // Download
  downloadHeadline: string;
  downloadSubheadline: string;

  // Footer
  footerSlogan: string;
  footerCopyright: string;
  footerPrivacy: string;
  footerTerms: string;

  // Privacy Policy Page
  privacyPolicyTitle: string;
  privacyPolicyLastUpdated: string;
  privacyPolicyIntro: string;
  privacyPolicyInfoCollected: string;
  privacyPolicyInfoCollectedP1: string;
  privacyPolicyInfoCollectedP2: string;
  privacyPolicyHowWeUse: string;
  privacyPolicyHowWeUseP1: string;
  privacyPolicyHowWeShare: string;
  privacyPolicyHowWeShareP1: string;
  privacyPolicyDataSecurity: string;
  privacyPolicyDataSecurityP1: string;
  privacyPolicyYourRights: string;
  privacyPolicyYourRightsP1: string;
  privacyPolicyChildren: string;
  privacyPolicyChildrenP1: string;
  privacyPolicyChanges: string;
  privacyPolicyChangesP1: string;
  privacyPolicyContact: string;
  privacyPolicyContactP1: string;

  // Terms of Service Page
  termsOfServiceTitle: string;
  termsOfServiceLastUpdated: string;
  termsOfServiceIntro: string;
  termsOfServiceAcceptance: string;
  termsOfServiceAcceptanceP1: string;
  termsOfServiceUserAccounts: string;
  termsOfServiceUserAccountsP1: string;
  termsOfServiceUserConduct: string;
  termsOfServiceUserConductP1: string;
  termsOfServiceIntellectualProperty: string;
  termsOfServiceIntellectualPropertyP1: string;
  termsOfServiceTermination: string;
  termsOfServiceTerminationP1: string;
  termsOfServiceDisclaimers: string;
  termsOfServiceDisclaimersP1: string;
  termsOfServiceLimitation: string;
  termsOfServiceLimitationP1: string;
  termsOfServiceGoverningLaw: string;
  termsOfServiceGoverningLawP1: string;
  termsOfServiceChanges: string;
  termsOfServiceChangesP1: string;
  termsOfServiceContact: string;
  termsOfServiceContactP1: string;

  // Delete Account Page
  deleteAccountTitle: string;
  deleteAccountIntro: string;
  deleteAccountBeforeTitle: string;
  deleteAccountBeforeP1: string;
  deleteAccountBeforeList: string[];
  deleteAccountBeforeImportant: string;
  deleteAccountHowToTitle: string;
  deleteAccountHowToP1: string;
  deleteAccountHowToStep1: string;
  deleteAccountHowToStep2: string;
  deleteAccountHowToStep3: string;
  deleteAccountHowToStep3List: string[];
  deleteAccountWhatDataTitle: string;
  deleteAccountWhatDataP1: string;
  deleteAccountWhatDataList: string[];
  deleteAccountRetentionTitle: string;
  deleteAccountRetentionP1: string;
  deleteAccountRetentionItem1: string;
  deleteAccountRetentionItem2: string;
  deleteAccountRetentionItem2List: string[];
  deleteAccountRetentionItem3: string;
  deleteAccountConfirmationTitle: string;
  deleteAccountConfirmationP1: string;
  deleteAccountConfirmationList: string[];
  deleteAccountAlternativesTitle: string;
  deleteAccountAlternativesP1: string;
  deleteAccountAlternativesList: string[];
  deleteAccountQuestionsTitle: string;
  deleteAccountQuestionsP1: string;
  deleteAccountQuestionsP2: string;
}

export const appName = "AssiFit";

export const translations: Record<Locale, AppTranslations> = {
  en: {
    navFeatures: 'Features',
    navTestimonials: 'Reviews',
    navDownload: 'Download',
    languageLabel: 'Language',

    heroHeadline: `AssiFit Your Fitness Assistant`,
    heroSubheadline: 'Home workouts with Push-ups & Squats, featuring voice assistance and video guides.',

    featuresHeadline: 'Key Features',
    features: [
      { title: 'Workout at Home', description: 'Effective workouts anytime, anywhere, no gym needed.' },
      { title: 'Voice Support', description: 'Detailed voice guidance to ensure correct technique.' },
      { title: 'Progress Tracking', description: 'Record and analyze workout results, motivating you daily.' },
      { title: 'Daily Reminders', description: 'Set workout schedules and receive notifications to never miss a session.' },
    ],

    testimonialsHeadline: 'What Users Say About AssiFit?',
    testimonialAgeSuffix: 'years old',
    testimonials: [
      { quote: 'Workout 5 minutes a day, feel healthier!', author: 'Lan', age: 25 },
      { quote: 'Voice support is like having a PT!', author: 'Nam', age: 30 },
      { quote: 'Easy to use app, diverse exercises.', author: 'Hùng', age: 28 },
      { quote: 'Thanks to AssiFit, I’m motivated to exercise daily.', author: 'Mai', age: 32 },
    ],

    downloadHeadline: 'Start Your Journey!',
    downloadSubheadline: `Download ${appName} today and discover a new, effective, and convenient way to work out.`,

    footerSlogan: `Your Fitness Assistant.`,
    footerCopyright: `© {year} ${appName}. All rights reserved.`,
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Service',

    privacyPolicyTitle: 'Privacy Policy',
    privacyPolicyLastUpdated: 'Last Updated: {date}',
    privacyPolicyIntro: `Welcome to ${appName}. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us.`,
    privacyPolicyInfoCollected: 'Information We Collect',
    privacyPolicyInfoCollectedP1: 'We collect personal information that you voluntarily provide to us when you register on the ${appName}, express an interest in obtaining information about us or our products and services, when you participate in activities on the ${appName} or otherwise when you contact us.',
    privacyPolicyInfoCollectedP2: 'The personal information that we collect depends on the context of your interactions with us and the ${appName}, the choices you make and the products and features you use. The personal information we collect may include the following: names, email addresses, workout data, and other similar information.',
    privacyPolicyHowWeUse: 'How We Use Your Information',
    privacyPolicyHowWeUseP1: 'We use personal information collected via our ${appName} for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.',
    privacyPolicyHowWeShare: 'How We Share Your Information',
    privacyPolicyHowWeShareP1: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.',
    privacyPolicyDataSecurity: 'Data Security',
    privacyPolicyDataSecurityP1: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.',
    privacyPolicyYourRights: 'Your Privacy Rights',
    privacyPolicyYourRightsP1: 'In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time.',
    privacyPolicyChildren: "Children's Privacy",
    privacyPolicyChildrenP1: `We do not knowingly solicit data from or market to children under 13 years of age. By using the ${appName}, you represent that you are at least 13 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the ${appName}.`,
    privacyPolicyChanges: 'Changes to This Policy',
    privacyPolicyChangesP1: 'We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible.',
    privacyPolicyContact: 'Contact Us',
    privacyPolicyContactP1: `If you have questions or comments about this notice, you may email us at sales.4eyeslearning@gmail.com`,

    termsOfServiceTitle: 'Terms of Service',
    termsOfServiceLastUpdated: 'Last Updated: {date}',
    termsOfServiceIntro: `Welcome to ${appName}! These terms and conditions outline the rules and regulations for the use of ${appName}'s Website and mobile application. By accessing this website/app we assume you accept these terms and conditions. Do not continue to use ${appName} if you do not agree to take all of the terms and conditions stated on this page. Please replace [Your Website/App URL Here] and [Your Country/State] with your specific information.`,
    termsOfServiceAcceptance: '1. Acceptance of Terms',
    termsOfServiceAcceptanceP1: `By using ${appName}, you signify your acceptance of these Terms of Service. If you do not agree to these terms, please do not use our Service. Your continued use of the Service following the posting of changes to these terms will be deemed your acceptance of those changes.`,
    termsOfServiceUserAccounts: '2. User Accounts',
    termsOfServiceUserAccountsP1: `When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.`,
    termsOfServiceUserConduct: '3. User Conduct',
    termsOfServiceUserConductP1: `You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You agree to be responsible for all of your activity in connection with the Service.`,
    termsOfServiceIntellectualProperty: '4. Intellectual Property',
    termsOfServiceIntellectualPropertyP1: `The Service and its original content, features, and functionality are and will remain the exclusive property of ${appName} and its licensors. The Service is protected by copyright, trademark, and other laws of both [Your Country] and foreign countries.`,
    termsOfServiceTermination: '5. Termination',
    termsOfServiceTerminationP1: `We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`,
    termsOfServiceDisclaimers: '6. Disclaimers',
    termsOfServiceDisclaimersP1: `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied.`,
    termsOfServiceLimitation: '7. Limitation of Liability',
    termsOfServiceLimitationP1: `In no event shall ${appName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.`,
    termsOfServiceGoverningLaw: '8. Governing Law',
    termsOfServiceGoverningLawP1: `These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.`,
    termsOfServiceChanges: '9. Changes to Terms',
    termsOfServiceChangesP1: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days notice prior to any new terms taking effect.',
    termsOfServiceContact: '10. Contact Us',
    termsOfServiceContactP1: `If you have any questions about these Terms, please contact us at sales.4eyeslearning@gmail.com`,

    deleteAccountTitle: 'Account Deletion',
    deleteAccountIntro: 'We understand that you may want to delete your account. This page explains how to request account deletion and what data will be removed.',
    deleteAccountBeforeTitle: 'Before You Delete Your Account',
    deleteAccountBeforeP1: 'Please note that deleting your account is permanent and cannot be undone. When you delete your account:',
    deleteAccountBeforeList: [
      'Your profile and account information will be permanently removed',
      'Your workout history and progress data will be deleted',
      'Any saved preferences or settings will be lost',
      'You will no longer be able to access the app with this account'
    ],
    deleteAccountBeforeImportant: 'Important: If you have an active subscription, please cancel it before deleting your account to avoid future charges. Deleting your account does not automatically cancel your subscription.',
    deleteAccountHowToTitle: 'How to Request Account Deletion',
    deleteAccountHowToP1: 'To delete your account and associated data, please follow these steps:',
    deleteAccountHowToStep1: 'Send an email to {email}',
    deleteAccountHowToStep2: 'Use the subject line: "Delete My Account"',
    deleteAccountHowToStep3: 'Include the following information in your email:',
    deleteAccountHowToStep3List: [
      'The email address associated with your account',
      'Your account username (if applicable)',
      'Confirmation that you understand this action is permanent'
    ],
    deleteAccountWhatDataTitle: 'What Data Will Be Deleted',
    deleteAccountWhatDataP1: 'When you request account deletion, the following data will be permanently removed:',
    deleteAccountWhatDataList: [
      'Account information: Email, username, profile details',
      'User-generated content: Workout logs, progress photos, notes',
      'App data: Settings, preferences, and customizations',
      'Authentication data: Login credentials and tokens'
    ],
    deleteAccountRetentionTitle: 'Data Retention',
    deleteAccountRetentionP1: 'We are committed to processing your deletion request promptly:',
    deleteAccountRetentionItem1: 'Account deletion: Your account and associated data will be permanently deleted from our systems within 30 days of receiving your request',
    deleteAccountRetentionItem2: 'Legal requirements: Some data may be retained for up to 90 days to comply with legal obligations, including:',
    deleteAccountRetentionItem2List: [
      'Transaction records for accounting purposes',
      'Data required for fraud prevention and security',
      'Information necessary to comply with applicable laws and regulations'
    ],
    deleteAccountRetentionItem3: 'Backup systems: Data in backup systems may take additional time to be fully removed, but will be inaccessible and scheduled for permanent deletion',
    deleteAccountConfirmationTitle: 'Confirmation and Timeline',
    deleteAccountConfirmationP1: 'Once we receive your deletion request:',
    deleteAccountConfirmationList: [
      'We will send you a confirmation email within 2-3 business days',
      'You may be asked to verify your identity to ensure the security of your account',
      'After verification, your account will be scheduled for deletion',
      'You will receive a final confirmation once the deletion is complete'
    ],
    deleteAccountAlternativesTitle: 'Alternative Options',
    deleteAccountAlternativesP1: 'If you are not sure about permanently deleting your account, consider these alternatives:',
    deleteAccountAlternativesList: [
      'Take a break: You can simply stop using the app without deleting your account',
      'Clear your data: You can manually delete your workout history and personal information from within the app settings',
      'Contact support: If you are experiencing issues, our support team may be able to help resolve them'
    ],
    deleteAccountQuestionsTitle: 'Questions or Concerns',
    deleteAccountQuestionsP1: 'If you have any questions about the account deletion process or our data practices, please contact us at {email}.',
    deleteAccountQuestionsP2: 'For more information about how we handle your data, please review our Privacy Policy.',
  },
  vn: {
    navFeatures: 'Tính năng',
    navTestimonials: 'Đánh giá',
    navDownload: 'Tải về',
    languageLabel: 'Ngôn ngữ',

    heroHeadline: `AssiFit Trợ lý Luyện tập Của Bạn`,
    heroSubheadline: 'Tập luyện tại nhà với Push-up & Squat, có voice hỗ trợ và video hướng dẫn.',

    featuresHeadline: 'Tính năng nổi bật',
    features: [
      { title: 'Tập ngay tại nhà', description: 'Luyện tập hiệu quả mọi lúc mọi nơi mà không cần đến phòng gym.' },
      { title: 'Voice hỗ trợ', description: 'Hướng dẫn bằng giọng nói chi tiết, giúp bạn thực hiện đúng kỹ thuật.' },
      { title: 'Theo dõi tiến độ', description: 'Ghi nhận và phân tích kết quả luyện tập, tạo động lực mỗi ngày.' },
      { title: 'Nhắc nhở hàng ngày', description: 'Thiết lập lịch tập và nhận thông báo để không bỏ lỡ buổi tập nào.' },
    ],

    testimonialsHeadline: 'Người dùng nói gì về AssiFit?',
    testimonialAgeSuffix: 'tuổi',
    testimonials: [
      { quote: 'Tập 5 phút mỗi ngày, thấy khỏe hơn!', author: 'Lan', age: 25 },
      { quote: 'Voice hỗ trợ như có PT bên cạnh!', author: 'Nam', age: 30 },
      { quote: 'Ứng dụng dễ sử dụng, bài tập đa dạng.', author: 'Hùng', age: 28 },
      { quote: 'Nhờ AssiFit mà mình có động lực tập thể dục mỗi ngày.', author: 'Mai', age: 32 },
    ],

    downloadHeadline: 'Bắt đầu hành trình của bạn!',
    downloadSubheadline: `Tải ${appName} ngay hôm nay và khám phá một phương pháp tập luyện mới, hiệu quả và tiện lợi.`,

    footerSlogan: `Your Fitness Assistant.`,
    footerCopyright: `© {year} ${appName}. Mọi quyền được bảo lưu.`,
    footerPrivacy: 'Chính sách Bảo mật',
    footerTerms: 'Điều khoản Dịch vụ',

    privacyPolicyTitle: 'Chính sách Bảo mật',
    privacyPolicyLastUpdated: 'Cập nhật lần cuối: {date}',
    privacyPolicyIntro: `Chào mừng bạn đến với ${appName}. Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của bạn. Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về thông báo bảo mật này, hoặc các thông lệ của chúng tôi liên quan đến thông tin cá nhân của bạn, vui lòng liên hệ với chúng tôi.`,
    privacyPolicyInfoCollected: 'Thông tin chúng tôi thu thập',
    privacyPolicyInfoCollectedP1: `Chúng tôi thu thập thông tin cá nhân mà bạn tự nguyện cung cấp cho chúng tôi khi bạn đăng ký trên ${appName}, bày tỏ sự quan tâm đến việc nhận thông tin về chúng tôi hoặc các sản phẩm và dịch vụ của chúng tôi, khi bạn tham gia vào các hoạt động trên ${appName} hoặc khi bạn liên hệ với chúng tôi.`,
    privacyPolicyInfoCollectedP2: `Thông tin cá nhân mà chúng tôi thu thập phụ thuộc vào bối cảnh tương tác của bạn với chúng tôi và ${appName}, các lựa chọn bạn đưa ra và các sản phẩm và tính năng bạn sử dụng. Thông tin cá nhân chúng tôi thu thập có thể bao gồm: tên, địa chỉ email, dữ liệu luyện tập và các thông tin tương tự khác.`,
    privacyPolicyHowWeUse: 'Cách chúng tôi sử dụng thông tin của bạn',
    privacyPolicyHowWeUseP1: `Chúng tôi sử dụng thông tin cá nhân được thu thập qua ${appName} của chúng tôi cho nhiều mục đích kinh doanh được mô tả dưới đây. Chúng tôi xử lý thông tin cá nhân của bạn cho những mục đích này dựa trên lợi ích kinh doanh hợp pháp của chúng tôi, để ký kết hoặc thực hiện hợp đồng với bạn, với sự đồng ý của bạn và/hoặc để tuân thủ các nghĩa vụ pháp lý của chúng tôi.`,
    privacyPolicyHowWeShare: 'Cách chúng tôi chia sẻ thông tin của bạn',
    privacyPolicyHowWeShareP1: 'Chúng tôi chỉ chia sẻ thông tin với sự đồng ý của bạn, để tuân thủ luật pháp, để cung cấp dịch vụ cho bạn, để bảo vệ quyền lợi của bạn hoặc để thực hiện các nghĩa vụ kinh doanh.',
    privacyPolicyDataSecurity: 'Bảo mật dữ liệu',
    privacyPolicyDataSecurityP1: 'Chúng tôi đã triển khai các biện pháp bảo mật kỹ thuật và tổ chức phù hợp được thiết kế để bảo vệ tính bảo mật của bất kỳ thông tin cá nhân nào chúng tôi xử lý. Tuy nhiên, mặc dù các biện pháp bảo vệ và nỗ lực của chúng tôi để bảo mật thông tin của bạn, không có việc truyền tải điện tử qua Internet hoặc công nghệ lưu trữ thông tin nào có thể được đảm bảo an toàn 100%.',
    privacyPolicyYourRights: 'Quyền riêng tư của bạn',
    privacyPolicyYourRightsP1: 'Ở một số khu vực, chẳng hạn như Khu vực Kinh tế Châu Âu (EEA) và Vương quốc Anh (UK), bạn có các quyền cho phép bạn truy cập và kiểm soát thông tin cá nhân của mình nhiều hơn. Bạn có thể xem xét, thay đổi hoặc chấm dứt tài khoản của mình bất kỳ lúc nào.',
    privacyPolicyChildren: 'Quyền riêng tư của trẻ em',
    privacyPolicyChildrenP1: `Chúng tôi không cố ý thu thập dữ liệu từ hoặc tiếp thị cho trẻ em dưới 13 tuổi. Bằng cách sử dụng ${appName}, bạn tuyên bố rằng bạn ít nhất 13 tuổi hoặc bạn là cha mẹ hoặc người giám hộ của trẻ vị thành niên đó và đồng ý cho trẻ vị thành niên đó sử dụng ${appName}.`,
    privacyPolicyChanges: 'Thay đổi chính sách này',
    privacyPolicyChangesP1: 'Chúng tôi có thể cập nhật thông báo bảo mật này theo thời gian. Phiên bản cập nhật sẽ được biểu thị bằng ngày "Cập nhật lần cuối" đã được cập nhật và phiên bản cập nhật sẽ có hiệu lực ngay khi có thể truy cập được.',
    privacyPolicyContact: 'Liên hệ chúng tôi',
    privacyPolicyContactP1: `Nếu bạn có câu hỏi hoặc nhận xét về thông báo này, bạn có thể gửi email cho chúng tôi tại sales@4eyeslearning.com`,

    termsOfServiceTitle: 'Điều khoản Dịch vụ',
    termsOfServiceLastUpdated: 'Cập nhật lần cuối: {date}',
    termsOfServiceIntro: `Chào mừng bạn đến với ${appName}! Các điều khoản và điều kiện này phác thảo các quy tắc và quy định cho việc sử dụng Trang web và ứng dụng di động của ${appName}. Bằng cách truy cập trang web/ứng dụng này, chúng tôi cho rằng bạn chấp nhận các điều khoản và điều kiện này. Không tiếp tục sử dụng ${appName} nếu bạn không đồng ý chấp nhận tất cả các điều khoản và điều kiện được nêu trên trang này. Vui lòng thay thế [URL Trang web/Ứng dụng của bạn tại đây] và [Quốc gia/Tiểu bang của bạn] bằng thông tin cụ thể của bạn.`,
    termsOfServiceAcceptance: '1. Chấp nhận Điều khoản',
    termsOfServiceAcceptanceP1: `Bằng cách sử dụng ${appName}, bạn biểu thị sự chấp nhận của mình đối với các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với các điều khoản này, vui lòng không sử dụng Dịch vụ của chúng tôi. Việc bạn tiếp tục sử dụng Dịch vụ sau khi các thay đổi đối với các điều khoản này được đăng tải sẽ được coi là bạn chấp nhận những thay đổi đó.`,
    termsOfServiceUserAccounts: '2. Tài khoản Người dùng',
    termsOfServiceUserAccountsP1: `Khi bạn tạo tài khoản với chúng tôi, bạn phải cung cấp cho chúng tôi thông tin chính xác, đầy đủ và hiện hành tại mọi thời điểm. Việc không làm như vậy cấu thành hành vi vi phạm Điều khoản, có thể dẫn đến việc chấm dứt ngay lập tức tài khoản của bạn trên Dịch vụ của chúng tôi.`,
    termsOfServiceUserConduct: '3. Hành vi Người dùng',
    termsOfServiceUserConductP1: `Bạn đồng ý không sử dụng Dịch vụ cho bất kỳ mục đích bất hợp pháp nào hoặc theo bất kỳ cách nào làm gián đoạn, hư hỏng hoặc suy giảm dịch vụ. Bạn đồng ý chịu trách nhiệm về tất cả hoạt động của mình liên quan đến Dịch vụ.`,
    termsOfServiceIntellectualProperty: '4. Sở hữu Trí tuệ',
    termsOfServiceIntellectualPropertyP1: `Dịch vụ và nội dung gốc, các tính năng và chức năng của nó là và sẽ vẫn là tài sản độc quyền của ${appName} và các nhà cấp phép của nó. Dịch vụ được bảo vệ bởi bản quyền, nhãn hiệu và các luật khác của cả [Quốc gia của bạn] và các quốc gia nước ngoài.`,
    termsOfServiceTermination: '5. Chấm dứt',
    termsOfServiceTerminationP1: `Chúng tôi có thể chấm dứt hoặc đình chỉ tài khoản của bạn ngay lập tức, mà không cần thông báo trước hoặc chịu trách nhiệm pháp lý, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn nếu bạn vi phạm Điều khoản.`,
    termsOfServiceDisclaimers: '6. Tuyên bố Miễn trừ Trách nhiệm',
    termsOfServiceDisclaimersP1: `Việc bạn sử dụng Dịch vụ là rủi ro duy nhất của bạn. Dịch vụ được cung cấp trên cơ sở "NGUYÊN TRẠNG" và "NHƯ HIỆN CÓ". Dịch vụ được cung cấp mà không có bất kỳ bảo đảm nào, dù rõ ràng hay ngụ ý.`,
    termsOfServiceLimitation: '7. Giới hạn Trách nhiệm',
    termsOfServiceLimitationP1: `${appName}, cũng như các giám đốc, nhân viên, đối tác, đại lý, nhà cung cấp hoặc các chi nhánh của mình, sẽ không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, do hậu quả hoặc trừng phạt nào, bao gồm nhưng không giới hạn, mất lợi nhuận, dữ liệu, sử dụng, uy tín hoặc các tổn thất vô hình khác, phát sinh từ việc bạn truy cập hoặc sử dụng hoặc không thể truy cập hoặc sử dụng Dịch vụ.`,
    termsOfServiceGoverningLaw: '8. Luật Điều chỉnh',
    termsOfServiceGoverningLawP1: `Các Điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp của [Quốc gia/Tiểu bang của bạn], bất kể các quy định về xung đột pháp luật của nó.`,
    termsOfServiceChanges: '9. Thay đổi Điều khoản',
    termsOfServiceChangesP1: 'Chúng tôi có quyền, theo quyết định riêng của mình, sửa đổi hoặc thay thế các Điều khoản này bất kỳ lúc nào. Chúng tôi sẽ cố gắng thông báo trước ít nhất 30 ngày trước khi bất kỳ điều khoản mới nào có hiệu lực.',
    termsOfServiceContact: '10. Liên hệ Chúng tôi',
    termsOfServiceContactP1: `Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại sales.4eyeslearning@gmail.com`,

    deleteAccountTitle: 'Xóa Tài khoản',
    deleteAccountIntro: 'Chúng tôi hiểu rằng bạn có thể muốn xóa tài khoản của mình. Trang này giải thích cách yêu cầu xóa tài khoản và dữ liệu nào sẽ bị xóa.',
    deleteAccountBeforeTitle: 'Trước khi Xóa Tài khoản',
    deleteAccountBeforeP1: 'Xin lưu ý rằng việc xóa tài khoản là vĩnh viễn và không thể hoàn tác. Khi bạn xóa tài khoản:',
    deleteAccountBeforeList: [
      'Hồ sơ và thông tin tài khoản của bạn sẽ bị xóa vĩnh viễn',
      'Lịch sử tập luyện và dữ liệu tiến độ của bạn sẽ bị xóa',
      'Mọi tùy chọn hoặc cài đặt đã lưu sẽ bị mất',
      'Bạn sẽ không thể truy cập ứng dụng với tài khoản này nữa'
    ],
    deleteAccountBeforeImportant: 'Quan trọng: Nếu bạn có gói đăng ký đang hoạt động, vui lòng hủy trước khi xóa tài khoản để tránh các khoản phí trong tương lai. Việc xóa tài khoản không tự động hủy đăng ký của bạn.',
    deleteAccountHowToTitle: 'Cách Yêu cầu Xóa Tài khoản',
    deleteAccountHowToP1: 'Để xóa tài khoản và dữ liệu liên quan, vui lòng làm theo các bước sau:',
    deleteAccountHowToStep1: 'Gửi email đến {email}',
    deleteAccountHowToStep2: 'Sử dụng tiêu đề: "Delete My Account"',
    deleteAccountHowToStep3: 'Bao gồm các thông tin sau trong email của bạn:',
    deleteAccountHowToStep3List: [
      'Địa chỉ email liên kết với tài khoản của bạn',
      'Tên người dùng của bạn (nếu có)',
      'Xác nhận rằng bạn hiểu hành động này là vĩnh viễn'
    ],
    deleteAccountWhatDataTitle: 'Dữ liệu Nào Sẽ Bị Xóa',
    deleteAccountWhatDataP1: 'Khi bạn yêu cầu xóa tài khoản, các dữ liệu sau sẽ bị xóa vĩnh viễn:',
    deleteAccountWhatDataList: [
      'Thông tin tài khoản: Email, tên người dùng, chi tiết hồ sơ',
      'Nội dung do người dùng tạo: Nhật ký tập luyện, ảnh tiến độ, ghi chú',
      'Dữ liệu ứng dụng: Cài đặt, tùy chọn và tùy chỉnh',
      'Dữ liệu xác thực: Thông tin đăng nhập và token'
    ],
    deleteAccountRetentionTitle: 'Lưu giữ Dữ liệu',
    deleteAccountRetentionP1: 'Chúng tôi cam kết xử lý yêu cầu xóa của bạn một cách nhanh chóng:',
    deleteAccountRetentionItem1: 'Xóa tài khoản: Tài khoản và dữ liệu liên quan của bạn sẽ bị xóa vĩnh viễn khỏi hệ thống của chúng tôi trong vòng 30 ngày kể từ khi nhận được yêu cầu',
    deleteAccountRetentionItem2: 'Yêu cầu pháp lý: Một số dữ liệu có thể được lưu giữ tới 90 ngày để tuân thủ các nghĩa vụ pháp lý, bao gồm:',
    deleteAccountRetentionItem2List: [
      'Hồ sơ giao dịch cho mục đích kế toán',
      'Dữ liệu cần thiết để ngăn chặn gian lận và bảo mật',
      'Thông tin cần thiết để tuân thủ các luật và quy định hiện hành'
    ],
    deleteAccountRetentionItem3: 'Hệ thống sao lưu: Dữ liệu trong hệ thống sao lưu có thể mất thêm thời gian để bị xóa hoàn toàn, nhưng sẽ không thể truy cập và được lên lịch xóa vĩnh viễn',
    deleteAccountConfirmationTitle: 'Xác nhận và Thời gian',
    deleteAccountConfirmationP1: 'Sau khi chúng tôi nhận được yêu cầu xóa của bạn:',
    deleteAccountConfirmationList: [
      'Chúng tôi sẽ gửi email xác nhận trong vòng 2-3 ngày làm việc',
      'Bạn có thể được yêu cầu xác minh danh tính để đảm bảo an toàn cho tài khoản của bạn',
      'Sau khi xác minh, tài khoản của bạn sẽ được lên lịch xóa',
      'Bạn sẽ nhận được xác nhận cuối cùng khi việc xóa hoàn tất'
    ],
    deleteAccountAlternativesTitle: 'Các Lựa chọn Thay thế',
    deleteAccountAlternativesP1: 'Nếu bạn không chắc chắn về việc xóa vĩnh viễn tài khoản của mình, hãy xem xét các lựa chọn thay thế sau:',
    deleteAccountAlternativesList: [
      'Nghỉ ngơi: Bạn có thể đơn giản ngừng sử dụng ứng dụng mà không cần xóa tài khoản',
      'Xóa dữ liệu của bạn: Bạn có thể xóa thủ công lịch sử tập luyện và thông tin cá nhân từ cài đặt ứng dụng',
      'Liên hệ hỗ trợ: Nếu bạn gặp vấn đề, đội ngũ hỗ trợ của chúng tôi có thể giúp giải quyết'
    ],
    deleteAccountQuestionsTitle: 'Câu hỏi hoặc Thắc mắc',
    deleteAccountQuestionsP1: 'Nếu bạn có bất kỳ câu hỏi nào về quy trình xóa tài khoản hoặc thực tiễn dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi tại {email}.',
    deleteAccountQuestionsP2: 'Để biết thêm thông tin về cách chúng tôi xử lý dữ liệu của bạn, vui lòng xem Chính sách Bảo mật của chúng tôi.',
  },
};
