import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

export const metadata = {
  title: "Liên hệ - Công Ty ThienPhu",
  description: "Thông tin liên hệ văn phòng, nhà máy và form liên hệ trực tuyến",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Hãy để lại thông tin để chúng tôi có thể hỗ trợ bạn tốt nhất
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Văn phòng */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông tin Văn phòng</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ:</h3>
                <p>123 Đường ABC, Quận XYZ, Hà Nội, Việt Nam</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Điện thoại:</h3>
                <p>+84 123 456 789</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                <p>info@thienphu.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Giờ làm việc:</h3>
                <p>Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                <p>Thứ 7: 8:00 - 12:00</p>
              </div>
            </div>
            <div className="mt-6 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966114477!2d105.83415931543382!3d21.028494685998552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b6ca21b60!2zSOG7kyBUaMOhbmcgQ2jhuqV5LCBIYW5vaQ!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Nhà máy */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Thông tin Nhà máy</h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Địa chỉ:</h3>
                <p>456 Đường DEF, Huyện GHI, Hà Nội, Việt Nam</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Điện thoại:</h3>
                <p>+84 987 654 321</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                <p>factory@thienphu.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Giờ làm việc:</h3>
                <p>Thứ 2 - Thứ 6: 7:00 - 17:00</p>
                <p>Thứ 7: 7:00 - 12:00</p>
              </div>
            </div>
            <div className="mt-6 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0966114477!1m3!1d3724.0966114477!2d105.83415931543382!3d21.028494685998552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b6ca21b60!2zSOG7kyBUaMOhbmcgQ2jhuqV5LCBIYW5vaQ!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Form liên hệ trực tuyến
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

