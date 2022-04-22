function StartScreen() {
  return (
    <div className="StartScreen">
      <div className="flex flex-col justify-center">
        
        <div className="flex justify-center">
           <img class="w-2/3 py-6" src="https://raw.githubusercontent.com/DanielRolfs/media/6e9fb86d795c84612fd947482646fc7fde0e716f/CrowdCreate/logo.svg" alt="logo"/>
        </div>
        
        <div className="py-6 flex justify-center">
           <div className="w-3/4">
           <h1 className="text-2xl">
             Join the <a className="text-[#ff9b1f]">crowd</a>
           </h1>
           <h1 className="text-2xl">
             investing
           </h1>
           <h1 className="text-2xl">
             work and money
           </h1>
           <h2 className="text-xl">
             & get <a className="text-[#00C500]">fairly</a> rewardet</h2>
           </div>
        </div>

      <div className="flex justify-center pt-16">
        <div class="rounded-md shadow">
            <a href="" class=" flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00C500] hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Join the movement</a>
        </div>
        </div>
        

        
      </div>
    </div>
  );
}

export default StartScreen;
