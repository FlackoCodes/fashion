function Main() {
    return (
        <main className="max-w-7xl mx-auto">
            <Trending />
        </main>
    )
}

export default Main

function Trending() {
    return (
        <section className="max-w-7xl my-4 md:my-8">
            <header className="flex justify-between items-center">
                <h2 className="text-3xl text-[#000000] font-bold leading-[42px] font-fashion tracking-tight">Trending Now</h2>
                <p className="text-[#000000] leading-[42px] font-nav border-b-2  text-[14px] font-medium border-b-black tracking-tighter">View All</p>
            </header>
            <div></div>
        </section>
    )
}
