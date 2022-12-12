
// const [selected, setSelected] = useState(false)
const tabs = [
    {name: 'Soupes', href: '/soupes', current: false},
    {name: 'Plats', href: '/plats', current: false},
    {name: 'Desserts', href: '/desserts', current: true},
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
    return (
        <div>
            <div className="flex items-center justify-center my-5">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current
                                    ? 'bg-blue-100 text-blue-700'
                                    : 'text-gray-500 hover:text-gray-700',
                                'px-3 py-2 text-base rounded-md'
                            )}
                            onClick={() => tab.current === true}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}
