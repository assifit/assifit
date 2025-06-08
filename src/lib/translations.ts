
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
    privacyPolicyContactP1: `If you have questions or comments about this notice, you may email us at sales@4eyeslearning.com`,

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
    termsOfServiceContactP1: `If you have any questions about these Terms, please contact us at sales@4eyeslearning.com`,
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
    termsOfServiceContactP1: `Nếu bạn có bất kỳ câu hỏi nào về các Điều khoản này, vui lòng liên hệ với chúng tôi tại sales@4eyeslearning.com`,
  },
};
