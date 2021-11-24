<template>
<div class="max-w flex justify-center items-center lg:h-screen flex-wrap mx-auto  lg:my-0">
	<div class="w-full lg:w-3/5 rounded lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75  lg:mx-0">
	<div class="p-4 md:p-12 text-center lg:text-left">
			<h1 class="text-3xl font-bold mb-2 lg:pt-0">Task</h1>

      <span class="inline-block rounded-full text-white bg-green-500 px-2 py-1 text-xs font-bold mr-3">Active</span>
      <span class="inline-block rounded-full text-white bg-indigo-500 px-2 py-1 text-xs font-bold mr-3">Success</span>
      <span class="inline-block rounded-full text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3">Pending</span>
      <span class="inline-block rounded-full text-white bg-red-500 px-2 py-1 text-xs font-bold mr-3">Not Executed</span>

      <p class="text-green-600 font-bold mb-2 lg:pt-0">01.01.1988</p>
      <h2 class="mb-2">Description:</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, unde quam itaque fugit nisi, molestiae molestias illo quia laudantium perferendis tenetur autem ex aspernatur! Distinctio quae ad architecto qui magni.
      </p>
		</div>
	</div>
</div>
</template>

<script>
export default {
  setup() {
    const status = ["Active", "Success", "Pending", "Not executed"];

    return {
      status,
    };
  },
};
</script>