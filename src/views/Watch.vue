<template>
    <div class="flex flex-col min-h-screen bg-orange-400">
        <header class="container mx-auto">
            <div class="m-0"> <!-- 余白0 -->
                <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-600 hover:shadow-sm hover:translate-y-0.5 transform transition ">
                    <router-link to="/">進行中のプロジェクト</router-link>
                </button>
                <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-600 hover:shadow-sm hover:translate-y-0.5 transform transition ">
                    <router-link to="/watch">完成した作品</router-link>
                </button>
            </div>
        </header>
        <main class="flex-grow container mx-auto">
            <div class="p-10 flex flex-wrap justify-center">
                    <div class="rounded shadow overflow-hidden m-5 bg-white">
                        <div class="hover:bg-gray-100 duration-300 cursor-pointer">
                            <img class="h-36 w-full object-cover cursor-pointer" src="../assets/images/quokka.jpg" alt="">
                            <div class="p-4">
                                <h4 class="text-2xl">Quokka</h4>
                                <p class="mt-2 text-sm text-gray-400">内容</p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded shadow overflow-hidden m-5 bg-white">
                        <div class="hover:bg-gray-100 duration-300 cursor-pointer">
                            <img class="h-36 w-full object-cover cursor-pointer" src="../assets/images/quokka.jpg" alt="">
                            <div class="p-4">
                                <h4 class="text-2xl">Quokka</h4>
                                <p class="mt-2 text-sm text-gray-400">内容</p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded shadow overflow-hidden m-5 bg-white">
                        <div class="hover:bg-gray-100 duration-300 cursor-pointer">
                            <img class="h-36 w-full object-cover cursor-pointer" src="../assets/images/quokka.jpg" alt="">
                            <div class="p-4">
                                <h4 class="text-2xl">Quokka</h4>
                                <p class="mt-2 text-sm text-gray-400">内容</p>
                            </div>
                        </div>
                    </div>
                    <div class="rounded shadow overflow-hidden m-5 bg-white">
                        <div class="hover:bg-gray-100 duration-300 cursor-pointer">
                            <img class="h-36 w-full object-cover cursor-pointer" src="../assets/images/quokka.jpg" alt="">
                            <div class="p-4">
                                <h4 class="text-2xl">Quokka</h4>
                                <p class="mt-2 text-sm text-gray-400">内容</p>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
        <footer class="bg-gray-200">
            <div class="m-0"> <!-- 余白0 -->
                <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition "
                @click="signOut">
                    サインアウト
                </button>
                <button class="shadow-lg w-1/2 py-3 px-1 bg-blue-400 text-white font-semibold rounded  hover:bg-blue-500 hover:shadow-sm hover:translate-y-0.5 transform transition ">
                    <router-link to="/user">ユーザ設定</router-link>
                </button>
            </div>
        </footer>
    </div>
</template>