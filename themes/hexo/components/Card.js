const Card = ({ children, headerSlot, className }) => {
  return <div className={className}>
    {headerSlot}
    <section className="card hover:shadow-lg dark:text-gray-300 border dark:border-black rounded-xl lg:p-6 p-4 bg-white dark:bg-hexo-black-gray duration-300 transition-all">
        {children}
    </section>
  </div>
}
export default Card
