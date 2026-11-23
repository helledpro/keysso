import { Activity, ArrowUpRight, BarChart3, Globe2, Plus, Search, Target, Users } from "lucide-react";

const stats = [
  { label: "Проекты", value: "0", note: "Клиентские рабочие пространства", icon: Globe2 },
  { label: "Конкуренты", value: "0", note: "Добавлены в проекты", icon: Users },
  { label: "SEO-запросы", value: "0", note: "Собрано и сгруппировано", icon: Search },
  { label: "Объявления", value: "0", note: "Сохранено сотрудниками", icon: Target },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-sm font-bold text-white">BM</div>
            <div><div className="font-semibold tracking-tight">BlackMedia</div><div className="text-xs text-gray-500">Competitor Intelligence</div></div>
          </div>
          <div className="rounded-full border border-gray-200 px-3 py-1.5 text-xs text-gray-600">Внутренний инструмент</div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div><p className="mb-2 text-sm font-medium text-red-600">BLACKMEDIA / RESEARCH</p><h1 className="text-3xl font-semibold tracking-tight">Конкурентная разведка</h1><p className="mt-2 text-gray-500">SEO-видимость и рекламные объявления конкурентов в Яндексе.</p></div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm"><Plus size={16}/> Создать проект</button>
        </div>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({label,value,note,icon:Icon}) => <div key={label} className="rounded-xl border border-gray-200 bg-white p-5"><div className="flex items-center justify-between text-sm text-gray-500"><span>{label}</span><Icon size={18}/></div><div className="mt-4 text-3xl font-semibold">{value}</div><div className="mt-1 text-xs text-gray-400">{note}</div></div>)}
        </section>
        <section className="mt-6 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2"><BarChart3 size={18}/><h2 className="font-semibold">Рабочие проекты</h2></div>
            <div className="mt-8 rounded-lg border border-dashed border-gray-300 px-6 py-12 text-center"><div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-gray-100"><Globe2 size={20} className="text-gray-500"/></div><h3 className="mt-4 font-medium">Пока нет проектов</h3><p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">Создайте проект клиента, добавьте его домен, регионы продвижения и сайты конкурентов.</p><button className="mt-5 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium">Создать первый проект</button></div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-2"><Activity size={18}/><h2 className="font-semibold">Состояние системы</h2></div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between"><span className="text-gray-600">Приложение</span><span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">Запущено</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600">База данных</span><span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">Не подключена</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600">Яндекс API</span><span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">Не настроен</span></div>
              <div className="flex items-center justify-between"><span className="text-gray-600">Расширение</span><span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">В разработке</span></div>
            </div>
            <a href="/api/health" className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-red-600">Проверить API <ArrowUpRight size={14}/></a>
          </div>
        </section>
        <p className="mt-8 text-xs text-gray-400">MVP · Яндекс SEO + Яндекс Директ · Все регионы России</p>
      </div>
    </main>
  );
}
