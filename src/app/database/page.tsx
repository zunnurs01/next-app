import db from "@/app/database/db";

const Page = async () => {
    const [results] = await db('select * from students')
    return (
        <div className='text-center mx-auto max-w-2xl'>
          <pre className="whitespace-pre">
                {results ? JSON.stringify(results, null, 4) : 'No data'}
          </pre>
        </div>
    );
};

export default Page;