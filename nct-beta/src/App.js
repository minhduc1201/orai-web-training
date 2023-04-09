
import './App.css';
import { Carousel } from 'flowbite-react';

function App() {
  return (
    <div class="bg-gray-800">
<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-10 w-52 h-screen transition-transform -translate-x-full border border-gray-700 sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full  py-4 overflow-y-auto bg-gray-800  ">
      <div class="flex justify-between">
         <img src='./logo.png' class=" h-6 mt-1 ml-4"></img>
         <button type="button" class="text-gray-500 border border-gray-700 hover:text-sky-500 hover:border-sky-500 font-semibold rounded-3xl text-sm px-2 py-0.5 text-center mr-7 mt-1  ">NÂNG CẤP</button>
      </div>
      <div class="flex bg-gray-700 mt-4 pb-5 ">
         <p class="font-medium text-gray-300 text-sm pt-4 pl-4 hover:text-sky-500 hover:cursor-pointer">Đăng nhập</p>
         <p class="font-medium text-gray-300 text-sm pt-4 pl-1.5">|</p>
         <p class="font-medium text-gray-300 text-sm pt-4 pl-1.5 hover:text-sky-500 hover:cursor-pointer">Đăng ký</p>
         <svg xmlns="http://www.w3.org/2000/svg" class="w-4 pt-4 mt-0.5 ml-5 hover:cursor-pointer" fill='lightgray' viewBox="0 0 512 512"><path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/></svg>
      </div>
      <ul class="space-y-2 font-medium mt-4 ml-2 ">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-300  hover:bg-gray-600 ">
			<svg fill="none" class="flex-shrink-0 w-4 h-6 text-lime-400 transition duration-75 border-solid" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
			</svg>
               <span class="ml-3 text-sm">Tìm Kiếm</span>
            </a>
         </li>
         
         <li>
            <a href="#" class="flex items-center p-2 text-gray-300 hover:bg-gray-600 ">
			<svg fill="currentColor" class="flex-shrink-0 w-4 h-6 text-sky-500 transition duration-75 border-solid" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clip-rule="evenodd" fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"></path>
</svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-sm">Trang Chủ</span>
            </a>
         </li>
		 <li>
            <button type="button" class="flex items-center w-full p-2 text-gray-300 transition duration-75 group hover:bg-gray-600 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
			<svg xmlns="http://www.w3.org/2000/svg" fill="gold" class="flex-shrink-0 w-4 h-6 transition duration-75 border-solid" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap text-sm" sidebar-toggle-item>Khám Phá</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Products</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Invoice</a>
                  </li>
            </ul>
         </li>
		 <li>
            <button type="button" class="flex items-center w-full p-2 text-gray-300 transition duration-75 group hover:bg-gray-600 " aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-4 h-6 transition duration-75 border-solid" fill="darkOrchid" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
                  <span class="flex-1 ml-3 text-left whitespace-nowrap text-sm" sidebar-toggle-item>Nghe Gì Hôm Nay</span>
                  <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <ul id="dropdown-example" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Products</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Billing</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-300 transition duration-75 pl-11 group hover:bg-gray-600 ">Invoice</a>
                  </li>
            </ul>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-300 hover:bg-gray-600 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-4 h-6 transition duration-75 border-solid"  fill='orangered' viewBox="0 0 448 512"><path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/></svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-sm">BXH NCT</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-300 hover:bg-gray-600 ">
            <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  class="flex-shrink-0 w-4 h-6 transition duration-75 border-solid"
  fill='	aqua'
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
    fill=""
  />
</svg>
               <span class="flex-1 ml-3 whitespace-nowrap text-sm">Musix 4U</span>
            </a>
         </li>
         
         
      </ul>
   </div>
</aside>
<aside id="separator-sidebar" class="border border-gray-700 fixed top-0 right-0 z-10 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-800 flex flex-col justify-between ">
      
    <div class="bg-slate-700 p-2">
		<img src="./song/7.jpg"></img>
		<p class="text-gray-300 hover:text-sky-500 hover: cursor-pointer font-medium">Tình yêu đến sau / Không cần tình..</p>
		<p class="text-gray-400 hover:text-sky-500 hover: cursor-pointer font-medium text-sm">Phạm Khánh Hưng, Myra Trần</p>
	</div>
         
    <img src="./play-bar.png"></img>
   </div>
</aside>
<div className="w-[125vh] h-[62vh] ml-60">
<Carousel >
    <img
      src="./carousel/c1.jpg"
      alt="..."
    />
    <img
      src="./carousel/c2.jpg"
      alt="..."
    />
    <img
      src="./carousel/c3.jpg"
      alt="..."
    />
    <img
      src="./carousel/c4.jpg"
      alt="..."
    />
    <img
      src="./carousel/c5.jpg"
      alt="..."
    />
  </Carousel>
  </div>
	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Để NCT Ôm Bạn Bằng Những Giai Điệu Này</p>
  	<div class="flex">
		<div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/1.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 w-64 hover:text-sky-500">Love Songs And Chill</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/2.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">Heart Bloom Ballad</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/3.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">Isn't It Romantic</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/4.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">All About You</p>
  		</div>
	</div>	
	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Thưởng Thức Nỗi Buồn</p>
  	<div class="flex">
		<div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/5.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer  w-64 hover:text-sky-500">Thưởng Thức Nỗi Buồn</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/6.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">V-Pop Sad Vibes</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/7.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">V-Pop Chill</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/8.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">Rainy Mood</p>
  		</div>
	</div>	
	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Đại Tiệc Pop</p>
  	<div class="flex">
		<div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/9.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 w-64 hover:text-sky-500">Power Pop</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/10.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">Pop BBQ</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/11.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">Pop Now</p>
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/12.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			<p class="text-gray-300 font-medium text-sm mt-2 hover:cursor-pointer w-64 hover:text-sky-500">US-UK Combo Hits</p>
  		</div>
		
	</div>	
	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Mới Phát Hành</p>
	<div class="mt-4 w-[154vh] ml-52 bg-slate-700 h-[26vh]">
		<div class='flex'>
			<img src="./news/new.jpg" class=" ml-8 mt-6  h-[20vh]"></img>
			<div class="mt-5 ml-8">
				<p class="text-gray-300 font-medium">1h</p>
				<div class="flex mt-1 ">
					<img src="./news/avata.jpg" class="w-6 rounded-3xl"></img>
					<p class="text-gray-400 text-sm font-medium ml-1">Chilly</p>
				</div>
				<div class="flex mt-1">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-3 mr-1" fill='lightgray' viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
				<p class="text-gray-400 text-sm font-medium">Ngày phát hành: 02/03/2023</p>
				</div>
				<div class="border-t w-[95vh] mt-3 border-gray-600"></div>
			</div>
		</div>
	</div>
	<div class="flex w-[125vh] ml-60 justify-center">
		<div class="relative group w-[13vh] mr-1">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/new.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      	</div>
		  <div class="relative group w-[13vh] mr-1">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/2.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      	</div>
		  <div class="relative group w-[13vh] mr-1">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/3.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      	</div>
		  <div class="relative group w-[13vh] mr-1">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/4.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      	</div>
		  <div class="relative group w-[13vh] mr-1">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/5.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			  <div class="relative group w-[13vh]">
      		<img class="h-[11vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/6.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-3 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-6 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
	</div>

	<p class="text-gray-300 text-2xl font-bold mt-8 w-[125vh] ml-60 ">BXH Bài Hát</p>
	<div class="flex ml-60">
		<div class='relative'>
			<img src="./items/bg.jpg" class="z-0 mt-5 w-[38vh] h-72 "></img>
			<div class="absolute top-14">
				<p class="z-10 text-white text-2xl font-normal ml-6  " >VIỆT NAM</p>
				<img src="./bxh/vn.png"class="w-40 mt-5 ml-6 z-20 absolute"></img>
				<div class="bg-gray-700 z-10 mt-20 pt-7 w-72 pl-6 pb-2 relative ">
					<p class="text-gray-300 hover:text-sky-500 hover:cursor-pointer text-base font-medium ">nếu lúc đó</p>
					<p class="text-gray-400 hover:text-sky-500 hover:cursor-pointer text-sm font-medium"> tlinh, 2pillz</p>
					<button type="button" class="text-gray-400 border border-gray-600 hover:text-sky-500 hover:border-sky-500 font-semibold rounded-sm text-sm px-7 py-1.5 text-center mr-7 mt-5 mb-5 ">Xem tất cả</button>
				</div>
			</div>
		</div>
		<div class='relative ml-7'>
			<img src="./items/bg-2.jpg" class="z-0 mt-5 w-[38vh] h-72 "></img>
			<div class="absolute top-14">
				<p class="z-10 text-white text-2xl font-normal ml-6  " >ÂU MỸ</p>
				<img src="./bxh/au-my.png"class="w-40 mt-5 ml-6 z-20 absolute"></img>
				<div class="bg-gray-700 z-10 mt-20 pt-7 w-72 pl-6 pb-2 relative ">
					<p class="text-gray-300 hover:text-sky-500 hover:cursor-pointer text-base font-medium ">Flowers</p>
					<p class="text-gray-400 hover:text-sky-500 hover:cursor-pointer text-sm font-medium">Miley Cyrus</p>
					<button type="button" class="text-gray-400 border border-gray-600 hover:text-sky-500 hover:border-sky-500 font-semibold rounded-sm text-sm px-7 py-1.5 text-center mr-7 mt-5 mb-5 ">Xem tất cả</button>
				</div>
			</div>
		</div>
		<div class='relative ml-7'>
			<img src="./items/bg-3.jpg" class=" z-0 mt-5 w-[38vh] h-72 "></img>
			<div class="absolute top-14">
				<p class="z-10 text-white text-2xl font-normal ml-6  " >HÀN QUỐC</p>
				<img src="./bxh/hq.png"class="w-40 mt-5 ml-6 z-20 absolute"></img>
				<div class="bg-gray-700 z-10 mt-20 pt-7 w-72 pl-6 pb-2 relative ">
					<p class="text-gray-300 hover:text-sky-500 hover:cursor-pointer text-base font-medium ">Ditto</p>
					<p class="text-gray-400 hover:text-sky-500 hover:cursor-pointer text-sm font-medium">NewJeans</p>
					<button type="button" class="text-gray-400 border border-gray-600 hover:text-sky-500 hover:border-sky-500 font-semibold rounded-sm text-sm px-7 py-1.5 text-center mr-7 mt-5 mb-5 ">Xem tất cả</button>
				</div>
			</div>
		</div>
	</div>

	<p class="text-gray-300 text-2xl font-bold mt-10 w-[125vh] ml-60 ">Video Hot</p>
	<div class="flex ml-60">
	  <div>
		<div class="relative group ">
      		<img class="h-[34vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/13.jpg" alt=""></img>
         	<div class="absolute top-0 mt-32 ml-52 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
    	</div>
		<p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-64 hover:text-sky-500">Trái Tim Bên Lề</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-64 hover:text-sky-500">Hồng Dương, RamC</p>
	  </div>
	   <div>
		<div class="relative group ml-4">
      		<img class="h-[34vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/14.jpg" alt=""></img>
         	<div class="absolute top-0 mt-32 ml-52 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        </div>
      	</div>
		  <p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-64 ml-4 hover:text-sky-500">Thanh Âm Em Để Lại</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-64 ml-4 hover:text-sky-500">Trung Quang</p>
	  </div>
	</div>
	<div class="flex ml-60">
	<div>
	<div class="relative group">
      		<img class="h-[16.5vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/15.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        </div>
    </div>
	<p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-52  hover:text-sky-500">Yêu Như Chưa Từng Yêu</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-52  hover:text-sky-500">Jackie Thắng NGuyễn</p>
	</div>

		  <div>
		  <div class="relative group ml-4">
      		<img class="h-[16.5vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/16.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        </div>
    	</div>
		<p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">Left Right</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">XG</p>
		</div>

		  <div>
		  <div class="relative group ml-4">
      		<img class="h-[16.5vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/17.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        </div>
    	</div>
		<p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">Thích Hay Là Yêu</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">Lou Hoàng</p>
	</div>

		  <div>
		  <div class="relative group ml-4">
      		<img class="h-[16.5vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./items/18.jpg" alt=""></img>
         	<div class="absolute top-0 mt-12 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			  <p class="text-gray-300 font-medium text-base mt-1.5 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">Giấc Mơ Khác</p>
		<p class="text-gray-500 font-medium text-sm mt-1 hover:cursor-pointer w-52 ml-4  hover:text-sky-500">Chillies</p>
		  </div>
	</div>

	<p class="text-gray-300 text-2xl font-bold mt-10 w-[125vh] ml-60 ">Bài Hát</p>
	<div class="flex ml-60 mt-4">
		<div class="">
			<div class="flex bg-slate-700 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/1.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Sẽ Có Một Ngày (TiJak Disco Remix)</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">nắng, TiJak</p>
						<div class="flex ml-60 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-2" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5 ">1.9K</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/2.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Chốn Phồn Hoa (Liam Lofi)</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Châu Khải Phong, ACV</p>
						<div class="flex ml-44 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">764</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/3.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">SHOOTING STAR (BARS REMIXX FEAT. RICO)</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">XG</p>
						<div class="flex ml-72 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-3" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">137</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/4.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Untitled ("Marry My Dead Body"Theme Song)</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Thái Y Lâm (Jolin Tsai)</p>
						<div class="flex ml-44 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">764</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/5.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Kitsch</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">IVE</p>
						<div class="flex ml-60 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-12" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">45.4K</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class=" ml-5">
			<div class="flex bg-slate-700 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/6.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Luôn yêu đời</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">ĐenCheng</p>
						<div class="flex ml-60 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">472K</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/7.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Tình Yêu Đến Sau / Không Cần Phải Hứa Đâu Em</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Phạm Khánh Hưng, Myra Trần</p>
						<div class="flex ml-28 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-1" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">3.5K</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/8.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Milk Of The Siren</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Melanie Martinez</p>
						<div class="flex ml-48 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-1" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">201</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/9.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">Dogtooth</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Tyler, The Creator</p>
						<div class="flex ml-48 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-1" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">66</p>
						</div>
					</div>
				</div>
			</div>
			<div class="flex bg-slate-700 mt-1 rounded-md hover:bg-gray-600 hover:cursor-default p-1.5 w-[60vh]">
				<img src="./song/10.jpg" class="w-14"></img>
				<div class="ml-2 ">
					<p class="text-gray-300 font-medium mt-1 ">06 Gucci (Feat. Dababy & 21 Savage)</p>
					<div class="flex">
						<p class="text-gray-400 font-medium text-sm hover:text-sky-500 hover:cursor-pointer mt-1">Gucci Mane</p>
						<div class="flex ml-56 mt-1 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="lightgray" class="w-4 ml-2" viewBox="0 0 512 512"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
							<p class="text-gray-400 font-medium text-normal ml-1.5">80</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Chủ Đề Hot</p>
  	<div class="flex">
		<div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/travel.png" alt=""></img>
         	
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/love.png" alt=""></img>
         	
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/chinese.png" alt=""></img>
         	
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/anime.png" alt=""></img>
      		</div>
  		</div>
	</div>	

	<p class="text-gray-300 text-2xl font-bold mt-6 w-[125vh] ml-60 ">Top 100</p>
  	<div class="flex">
		<div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/country.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/latin.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/vietmix.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			
  		</div>
		  <div class="bg-gray-800 w-0 ml-60">
     		<div class="relative group w-[30vh]">
      		<img class="h-[29vh] mt-4 shadow-lg transition duration-500 ease-in-out transform group-hover:cursor-pointer group-hover:brightness-50" 
    	      src="./news/bolero.jpg" alt=""></img>
         	<div class="absolute top-0 mt-24 ml-20 opacity-0 group-hover:cursor-pointer group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-10 w-16 text-white" fill="black">
  					<circle cx="12" cy="12" r="11" stroke="currentColor" stroke-width="2" fill="white"/>
  					<path d="M9.5 7.5l7 4.5-7 4.5z"/>
				</svg>
        	</div>
      		</div>
			
  		</div>
	</div>	
	

	<div class=" mt-32 ">
		<div class="border-t mb-5 border-slate-700"></div>
		<div class="flex ml-60">
		<p class="text-gray-400 font-medium text-sm hover:cursor-pointer hover:text-sky-500">Giới thiệu</p>
		<p class="text-gray-500 ml-4">|</p>
		<p class="text-gray-400 ml-4 font-medium text-sm hover:cursor-pointer hover:text-sky-500">SP-DV</p>
		<p class="text-gray-500 ml-4">|</p>
		<p class="text-gray-400 ml-4 font-medium text-sm hover:cursor-pointer hover:text-sky-500">Hỗ trợ</p>
		<p class="text-gray-500 ml-4">|</p>
		<p class="text-gray-400 ml-4 font-medium text-sm hover:cursor-pointer hover:text-sky-500">Thỏa thuận sử dụng</p>
		</div>
		<div class="border-t mt-5 border-slate-700"></div>
		<img src="./infomation.png" class="ml-52 w-[131vh]"></img>
	</div>
	<div class="border-t"></div>

  </div>
  );
}

export default App;
