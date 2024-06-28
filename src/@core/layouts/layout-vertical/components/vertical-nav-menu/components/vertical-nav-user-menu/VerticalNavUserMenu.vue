<<<<<<< HEAD
<template>
  <b-nav>
    <b-nav-item-dropdown
      style="position:relative"
      no-caret
    >
      <div class="mt-1 mb-1">
        <div
          class="d-flex"
          style="justify-content:center"
        >
          <p
            class="user-name font-weight-bolder mb-0"
            style="color:white"
          >
            {{ userData.fullName || userData.username }}
          </p>
        </div>
        <div
          class="d-flex"
          style="justify-content:center;color:grey"
        >
          <span class="user-status">{{ userData.role }}</span>
        </div>
      </div>
      <template #button-content>
        <div class="d-flex">
          <b-avatar
            size="40"
            :src="userData.avatar"
            variant="light-primary"
            badge
            class="badge-minimal"
            badge-variant="success"
          >
            <feather-icon
              v-if="!userData.fullName"
              icon="UserIcon"
              size="22"
            />
          </b-avatar>
        </div>
      </template>
      <b-dropdown-item
        :to="{ name: 'pages-profile' }"
        link-class="d-flex align-items-center"
      >
        <feather-icon
          size="16"
          icon="UserIcon"
          class="mr-50"
        />
        <span>Profile</span>
      </b-dropdown-item>
      <b-dropdown-item
        link-class="d-flex align-items-center"
        @click="logout"
      >
        <feather-icon
          size="16"
          icon="LogOutIcon"
          class="mr-50"
        />
        <span>Logout</span>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
import {
  BNavItemDropdown, BDropdownItem, BAvatar, BNav
} from 'bootstrap-vue'
import { initialAbility } from '@/libs/acl/config'
import useJwt from '@/auth/jwt/useJwt'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    // BDropdownDivider,
    BAvatar,
    BNav
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/components/variables-dark';

.user-nav-group {
  padding: 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $theme-dark-navigation-divider-color;

  .user-nav {
    padding-left: 16px;

    .user-name {
      color: #B4B7BD;
    }

    .user-status {
      color: #B9B9C3;
    }
  }

  .dropdown {
    a {
      svg {
        width: 16px;
        height: 16px;
        font-size: 16px;
        color: #B4B7BD !important;
        margin: 0;
      }
    }
  }
}
</style>
=======
<template>
  <b-nav>
    <b-nav-item-dropdown
      style="position:relative"
      no-caret
    >
      <div class="mt-1 mb-1">
        <div
          class="d-flex"
          style="justify-content:center"
        >
          <p
            class="user-name font-weight-bolder mb-0"
            style="color:white"
          >
            {{ userData.fullName || userData.username }}
          </p>
        </div>
        <div
          class="d-flex"
          style="justify-content:center;color:grey"
        >
          <span class="user-status">{{ userData.role }}</span>
        </div>
      </div>
      <template #button-content>
        <div class="d-flex">
          <b-avatar
            size="40"
            :src="userData.avatar"
            variant="light-primary"
            badge
            class="badge-minimal"
            badge-variant="success"
          >
            <feather-icon
              v-if="!userData.fullName"
              icon="UserIcon"
              size="22"
            />
          </b-avatar>
        </div>
      </template>
      <b-dropdown-item
        :to="{ name: 'pages-profile' }"
        link-class="d-flex align-items-center"
      >
        <feather-icon
          size="16"
          icon="UserIcon"
          class="mr-50"
        />
        <span>Profile</span>
      </b-dropdown-item>
      <b-dropdown-item
        link-class="d-flex align-items-center"
        @click="logout"
      >
        <feather-icon
          size="16"
          icon="LogOutIcon"
          class="mr-50"
        />
        <span>Logout</span>
      </b-dropdown-item>
    </b-nav-item-dropdown>
  </b-nav>
</template>

<script>
import {
  BNavItemDropdown, BDropdownItem, BAvatar, BNav
} from 'bootstrap-vue'
import { initialAbility } from '@/libs/acl/config'
import useJwt from '@/auth/jwt/useJwt'
import { avatarText } from '@core/utils/filter'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    // BDropdownDivider,
    BAvatar,
    BNav
  },
  data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText,
    }
  },
  methods: {
    logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)
      localStorage.removeItem(useJwt.jwtConfig.storageRefreshTokenKeyName)

      // Remove userData from localStorage
      localStorage.removeItem('userData')

      // Reset ability
      this.$ability.update(initialAbility)

      // Redirect to login page
      this.$router.push({ name: 'auth-login' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/components/variables-dark';

.user-nav-group {
  padding: 16px;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $theme-dark-navigation-divider-color;

  .user-nav {
    padding-left: 16px;

    .user-name {
      color: #B4B7BD;
    }

    .user-status {
      color: #B9B9C3;
    }
  }

  .dropdown {
    a {
      svg {
        width: 16px;
        height: 16px;
        font-size: 16px;
        color: #B4B7BD !important;
        margin: 0;
      }
    }
  }
}
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
