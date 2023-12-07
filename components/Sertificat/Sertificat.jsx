import React from "react";
import "./Scss/Sertificat.scss";

function Sertificat({ english, russian, uzbek }) {
  return (
    <div className="Sertificat">
      <div className="wrapper">
        <h1>
          {english && "HERE'S HOW IT WORKS"}
          {russian && "ВОТ КАК ЭТО РАБОТАЕТ"}
          {uzbek && "Biz bilan ishlash tartibi"}
        </h1>
        <div className="col-12 cards">
          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english && "1. Get in touch with us Below"}
                  {russian && "1. Свяжитесь с нами Ниже"}
                  {uzbek && "1. Quyida biz bilan bog'laning"}
                </h3>
                <p>
                  {english &&
                    "We'll discuss the specific products you need and outline how we can fulfill your order -plus you'll receive $500 off the delivery cost of your first container."}
                  {russian &&
                    "Мы обсудим конкретные продукты, которые вам нужны, и наметим, как мы можем выполнить ваш заказ - Кроме того, вы получите скидку в размере 500 долларов США на стоимость доставки вашего первого контейнера."}
                  {uzbek &&
                    "Biz bilan pastdagi formani to’ldirib orqali bog’laning Biz siz uchun kerak bo’lgan mahsulotlar haqida va qanday qilib buyurtmangizni tayyorlab berish to’g’risida gaplashamiz. Uning ustiga, Siz birinchi konteyneringizdan $500 chegirmaga ega bo’lasiz."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english && "2. We organize product samples"}
                  {russian && "2. Мы организуем образцы продукции"}
                  {uzbek && "2. Biz mahsulot namunalarini tashkil qilamiz"}
                </h3>
                <p>
                  {english &&
                    "Our team organizes samples for you to inspect, giving you a chance to ensure they are exactly what you need."}
                  {russian &&
                    "Наша команда организует образцы для проверки, что дает вам возможность убедиться, что они именно то, что вам нужно."}
                  {uzbek &&
                    "Biz mahsulot na’munalarini tayyorlaymiz. Bizning jamoamiz siz ko’rib chiqishingiz uchun mahsulot na’munalarini tayyorlaydi, va bu orqali siz mahsulot sifatiga ishonch hosil qilib olasiz."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english && "3. Finalize the details of your order"}
                  {russian && "3. Завершите детали вашего заказа"}
                  {uzbek && "3. Buyurtma tafsilotlarini yakunlang"}
                </h3>
                <p>
                  {english &&
                    "Once you're happy to move forward, we can finalize the details and organize payment for the order, then we'll start the production process."}
                  {russian &&
                    "Как только вы будете готовы двигаться вперед, мы можем завершить детализацию и организовать оплату заказа, после чего мы начнем производственный процесс."}
                  {uzbek &&
                    "Buyurtmangizni rasmiylashtiramiz. Davom ettirishga tayyor bo’lganingizdan so’ng, biz sizni buyurtmangizni rasmiylashtirishimiz va buyurtma uchun to’lovni tashkillashtiramiz. Shundan so’ng, buyurtmangizni ishlab chiqarish jarayoni boshlanadi."}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english && "4. Quality control before delivery"}
                  {russian && "4. Контроль качества перед доставкой"}
                  {uzbek && "4. Yetkazib berishdan oldin sifat nazorati"}
                </h3>
                <p>
                  {english &&
                    "Our quality assurance team ensures every stage of production and packaging is completed to our quality standards, so you receive high quality products."}
                  {russian &&
                    "Наша команда обеспечения качества следит за тем, чтобы каждый этап производства и упаковки выполнялся в соответствии с нашими стандартами качества, поэтому вы получаете продукцию высокого качества.Контроль качества перед доставкой Наша команда обеспечения качества следит за тем, чтобы каждый этап производства и упаковки выполнялся в соответствии с нашими стандартами качества, поэтому вы получаете продукцию высокого качества."}
                  {uzbek &&
                    "Yetkazib berishdan avval sifat nazorati. Siz yuqori sifatli mahsulot olishingiz uchun, bizning sifat nazorati jamoamiz ishlab chiqarish va qadoqlash bosqichidagi har bir qadamni standartlarimizga mos ravishda bajarilayotganiga ishonch hosil qilishadi."}
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english && "5. Products are delivered to your site"}
                  {russian && "5. Товары доставляются на ваш объект"}
                  {uzbek && "5. Mahsulotlar saytingizga yetkaziladi"}
                </h3>
                <p>
                  {english &&
                    "Your products will be shipped and delivered safely - in optimal condition."}
                  {russian &&
                    "Ваши товары будут отправлены и доставлены в целости и сохранности - в оптимальном состоянии."}
                  {uzbek &&
                    "Buyurtmangiz sizga yetkazib beriladi Buyurtmangiz sizga eng optimal va xavfsiz holatda yetkazib beriladi."}
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 sertificts">
            <div className="body">
              <div className="card">
                <h3>
                  {english &&
                    "6. Use saved time and money to grow your business"}
                  {russian &&
                    "6. Используйте сэкономленное время и деньги для развития своего бизнеса"}
                  {uzbek &&
                    "6. O'z biznesingizni rivojlantirish uchun tejalgan vaqt va puldan foydalaning"}
                </h3>
                <p>
                  {english &&
                    "With saved time on your hand, you can focus on improving other parts of your business and speed up the business development process as a whole."}
                  {russian &&
                    "Сэкономив время, вы можете сосредоточиться на улучшении других аспектов своего бизнеса и ускорить процесс развития бизнеса в целом."}
                  {uzbek &&
                    "Tejab qolingan vaqt va pulni biznesingizni yanada rivojlantirish uchun sarflang Tejab qolingan vaqt orqali siz biznesingizni boshqa joylariga e’tibor qaratishingiz mumkin va biznesingizni rivojlanish jarayonini tezlashtirishingiz mumkin."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sertificat;
