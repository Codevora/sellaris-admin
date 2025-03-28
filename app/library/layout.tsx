const LibraryLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="lg:ml-[240px] 2xl:ml-[270px] p-5 flex gap-10 h-auto w-auto bg-[#f4f4f]">
            {children}
        </div>
    )
}
export default LibraryLayout