import Section from "components/Section";

export default function Home() {
  const items = [
    {
      id: 1,
      title: "Mutlu Türkçe Şarkılar",
      description: "Neşeli Türkçe parçalarla moral depola.",
      image: "https://i.scdn.co/image/ab67706f00000002272d6123c8962dc3107efeb6",
    },
    {
      id: 2,
      title: "altüst",
      description: "Biraz dağıldık gibi",
      image: "https://i.scdn.co/image/ab67706f0000000246cd2f075db478c596975cef",
    },
    {
      id: 3,
      title: "Feelin Myself",
      description:
        "The hip-hop playlist thats a whole mood. Art By Laci Jordan; Cover: Kali",
      image: "https://i.scdn.co/image/ab67706f000000025acad25afe64f23413d1d674",
    },
    {
      id: 4,
      title: "Akustik Türkçe",
      description: "Sevdiğin yerli akustik şarkılar. Kapak: Feride Hilal Akın",
      image: "https://i.scdn.co/image/ab67706f00000002e3a3b25c2b5a594a23867e4c",
    },
    {
      id: 5,
      title: "You & Me",
      description: "Its just us—and this awesome alt soundtrack.",
      image: "https://i.scdn.co/image/ab67706f00000002399330e810fd7b01ea377ee8",
    },
  ];

  return (
    <div className="grid gap-y-8">
      <Section title="Ruh Hali" more="./hepsinigor" items={items} />
      <Section title="Popüler sanatçılar" more="./hepsinigor" items={items} />
      <Section
        title="Popüler yeni çıkanlar"
        more="./hepsinigor"
        items={items}
      />
      <Section title="Popüler albümler" more="./hepsinigor" items={items} />
    </div>
  );
}
