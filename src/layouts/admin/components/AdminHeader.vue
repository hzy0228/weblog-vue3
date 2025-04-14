<template>
  <!-- 设置背景色为白色、高度为 64px，padding-right 为 4， border-bottom 为 slate 200 -->
  <div class="bg-white h-[64px] flex pr-4 border-b border-slate-200">
    <!-- 左边栏收缩、展开 -->
    <div class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 hover:bg-gray-200">
      <el-icon>
        <Fold/>
      </el-icon>
    </div>

    <!-- 右边容器，通过 ml-auto 让其在父容器的右边 -->
    <div class="ml-auto flex">
      <!-- 点击全屏展示 -->
      <el-tooltip class="box-item" effect="dark" content="全屏" placement="bottom">
      <div
          class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 mr-2 hover:bg-gray-200">
        <el-icon>
          <FullScreen/>
        </el-icon>
      </div>
      </el-tooltip>

      <!-- 登录用户头像 -->
      <el-dropdown>
                <span class="el-dropdown-link flex items-center justify-center text-gray-700 text-xs">
                    <!-- 头像 Avatar -->
                    <el-avatar :size="25"
                               src="https://ts3.tc.mm.bing.net/th/id/OIP-C.7GLMYPqMlt2LgkbPsOnDIAAAAA?w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"/>
                    Admin
                    <el-icon class="el-icon--right">
                        <arrow-down/>
                    </el-icon>
                </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
