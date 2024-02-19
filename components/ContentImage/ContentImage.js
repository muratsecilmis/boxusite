import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

const ContentImageData = [
   
    {
        id: uuid(),
        title: "Local Game Jam - İstanbul 2024",
        content:
            "Hikaye Temalı 48 saatlik Local Game Jam 2'yi İstanbul Beyoğlu'nda gerçekleştirdik. 35 Katılımcı - 10 Takım mücadeleye başladı.48 saatin sonunda herkes için unutulmaz bir Jam olarak akıllarda kaldık! \"This perfect game jam is a Boxu jam.\" sloganında belirttiğimiz gibi; Boxu bir iş başardık! ",
        align: "right",
        image: "/lgj2q.jpg",
        title2:""
    },
    {
        id: uuid(),
        title: "Kültür, Hikaye & Lahmacun", 
        content:
            "Hikayeler, kültürümüzün bir parçası olarak bugunlerimize ulaşmıştır. Elbette kendi ürettiğimiz hikayelerde mevcut. Bu jam bize hikayelerden, kültürden ve özel olarak lahmacun üzerine düşündürdü!",
        align: "left",
        image: "/sunum.jpg",
        title2:""
    },
    {
        id: uuid(),
        title: "Neler oldu?",
        content:
            " ",
        align: "right",
        image: "/arka.png",
        title2:""
    },
    {
        id: uuid(),
        title: "Lavacu ", 
        content:
            "Dükkana gelen müsteriler kahramanımızdan Alman usulü lahmacunlar ister ve kahramanımız da istenen lahmacunları kendi bilidigi gibi yorumlayıp gerçek lahmacunu ülkeye tanıtmaya çalısır",
        align: "left",
        image: "/lavacu.png",
        title2:"Almanya'da Bir Lahmacun dükkanı"
    },
    {
        id: uuid(),
        title: "GameJam Katili",
        content:
            "Samet bir önceki GameJam’de developer olarak iyi bir iş çıkaramamış, takım arkadaşı Murat abiyi hayal kırıklığına uğratmıştır. Yine de Murat abi, Samet'i yeni düzenlediği Local GameJam’e çağırmıştır. Bu sefer Samet'in amacı elinden gelenin en iyisini yapmaktır. Ancak biraz geç kalmıştır… Samet, game developerların gizemli bir şekilde ortadan kaybolmasıyla katıldığı jam’de bir katilin olduğunu düşünür.",
        align: "right",
        image: "/GameJamKatili.jpeg",
        title2:"Gizemli Katili bul!"
    },
    {
        id: uuid(),
        title: "Lahmacun bir etkinlik yemeği midir? ", 
        content:
            "Dükkana gelen müsteriler kahramanımızdan Alman usulü lahmacunlar ister ve kahramanımız da istenen lahmacunları kendi bilidigi gibi yorumlayıp gerçek lahmacunu ülkeye tanıtmaya çalısır",
        align: "left",
        image: "/lahmacunonhand.png",
        title2:"Denedik oldu!"
    },
];

export const ContentImage = () => {
    return (   
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                         <h4 className="mb-6 h4 h5  font-semibold text-black">
                            {item.title2}
                        </h4>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
 
    );
};
