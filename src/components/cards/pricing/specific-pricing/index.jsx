const SpecificPricing = ({ title, amount, featureList }) => {

    return (
        <div className='card bg-orange-1'>

            <div className='card-body'>
                <div className="card-header flex flex-col justify-center items-center">
                    <div className='mb-4 space-y-1'>
                        <span>{title}</span>
                        <div className='border-2 rounded-xl border-orange-4 bg-orange-4' />
                    </div>
                    {
                        amount && (
                            <h1 className='text-4xl'>$ {amount}</h1>
                            // <h1 className='text-4xl'>{currency.currencySigns} {currency.currencyRate}</h1>
                        )
                    }
                </div>
                <div className="text-content2">
                    <ul className='flex flex-col items-start justify-center'>

                        {
                            featureList?.map((data, index) => {
                                return (
                                    <div className='h-full lg:h-10 w-full lg:w-fit flex space-x-2' key={index}>
                                        <span className="dot bg-orange-5 block my-auto" />
                                        <li className='my-1 text-orange-7 text-sm lg:text-xl'>
                                            <p className='my-auto'>{data}</p>
                                        </li>
                                    </div>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SpecificPricing;
