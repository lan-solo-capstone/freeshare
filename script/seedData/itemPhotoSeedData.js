'use strict'

const itemPhotos = [
  {
    photoTitle: 'ibis_bike',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00y0y_k85pzQTBKgmz_09G07g_600x450.jpg',
    itemIdTEMP: 1,
  },
  {
    photoTitle: 'pan',
    CloudREF: '/images/pan.jfif',
    downloadURL:
      ' https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2Fpan.jfif?alt=media&token=75c2ea85-57ac-48c2-af08-69f83b9f9f0b,',
    itemIdTEMP: 2,
  },
  {
    photoTitle: 'stove',
    CloudREF: '/images/stove.jpg',
    downloadURL:
      ' https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2Fpan.jfif?alt=media&token=75c2ea85-57ac-48c2-af08-69f83b9f9f0b,',
    itemIdTEMP: 2,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 3,
  },
  {
    photoTitle: 'watch',
    CloudREF: '/images/watch.jpg',
    downloadURL:
      'https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2Fwatch.jpg?alt=media&token=cb3cfdb2-bcda-44de-a289-c6eb1b8abf82',
    itemIdTEMP: 4,
  },
  {
    photoTitle: 'boots',
    CloudREF: '/images/boots.webp',
    downloadURL:
      'https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2Fboots.webp?alt=media&token=4cc149ba-2e57-4397-8a89-3d5c79a07c99,',
    itemIdTEMP: 5,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 6,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 7,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 8,
  },
  {
    photoTitle: 'puppy.jpg',
    CloudREF: '',
    downloadURL:
      'https://images-na.ssl-images-amazon.com/images/I/81vkislowDL._AC_SL1500_.jpg',
    itemIdTEMP: 9,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00g0g_j3ZzaKfhpcHz_0t20CI_600x450.jpg',
    itemIdTEMP: 10,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00q0q_eKmFeTBdbnxz_0jm0ew_600x450.jpg',
    itemIdTEMP: 11,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00P0P_ehVzksTJSYvz_0jm0ew_600x450.jpg',
    itemIdTEMP: 11,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00I0I_7sHNozynFzVz_0jm0ew_600x450.jpg',
    itemIdTEMP: 11,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00Z0Z_1c7hUBPhPA2z_0jm0ew_600x450.jpg',
    itemIdTEMP: 11,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00V0V_9ldVTBr8XL1z_0jm0ew_600x450.jpg',
    itemIdTEMP: 11,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/01717_enOup0im5lTz_0t20CI_600x450.jpg',
    itemIdTEMP: 12,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00q0q_6BmTenyF6gXz_0t20CI_600x450.jpg',
    itemIdTEMP: 12,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00l0l_47Q9L2NzSQpz_0CI0t2_600x450.jpg',
    itemIdTEMP: 13,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00i0i_lLzukY5klXXz_06s038_600x450.jpg',
    itemIdTEMP: 14,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00k0k_cxRToPKcAZtz_05a03S_600x450.jpg',
    itemIdTEMP: 15,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00z0z_fQgozRvtzVLz_0t20CI_600x450.jpg',
    itemIdTEMP: 16,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00K0K_6ZggL1VfTV1z_0t20CI_600x450.jpg',
    itemIdTEMP: 16,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00T0T_bYocQlK8BJpz_0t20CI_600x450.jpg',
    itemIdTEMP: 16,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00l0l_52bcINB6sgoz_0CI0iL_600x450.jpg',
    itemIdTEMP: 17,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00h0h_jN8Pm1g5bObz_07K0ak_600x450.jpg',
    itemIdTEMP: 18,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/01212_i4s8lNpfl5Ez_0CI0t2_600x450.jpg',
    itemIdTEMP: 19,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00202_3Vd2LjO5tNrz_0i40ww_600x450.jpg',
    itemIdTEMP: 20,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00z0z_hFDx1JVbLIwz_0i40ww_600x450.jpg',
    itemIdTEMP: 20,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00s0s_1gneT7k3cRRz_0lM0t2_600x450.jpg',
    itemIdTEMP: 21,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/01616_hMIVD7e4u0u_0CI0iP_600x450.jpg',
    itemIdTEMP: 22,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00h0h_lafVWJ1CNRL_0CI0lM_600x450.jpg',
    itemIdTEMP: 22,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00h0h_lafVWJ1CNRL_0CI0lM_600x450.jpg',
    itemIdTEMP: 22,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00d0d_hZS6IL78NWzz_0t20CI_600x450.jpg',
    itemIdTEMP: 23,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00n0n_6rfL44at1qIz_0gw0b1_600x450.jpg',
    itemIdTEMP: 24,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00d0d_9ND2VEpAeYAz_0CI0hS_600x450.jpg',
    itemIdTEMP: 25,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00X0X_bc5haCP066Rz_0CI0hS_600x450.jpg',
    itemIdTEMP: 25,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00202_dRuI1anU4wOz_0CI0hS_600x450.jpg',
    itemIdTEMP: 25,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00Y0Y_ioIdCXHEEUm_0CI0t2_600x450.jpg',
    itemIdTEMP: 26,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 27,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00000_yiktoNGNXSz_0CI0t2_600x450.jpg',
    itemIdTEMP: 28,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/01717_k6qZZAslGe1z_0t20t2_600x450.jpg',
    itemIdTEMP: 29,
  },
  {
    photoTitle: 'freeTree',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00000_du2vYCxHm7mz_0lM0t2_600x450.jpg',
    itemIdTEMP: 30,
  },
  {
    photoTitle: 'freeTree2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00u0u_VSo0d5bRPqz_0lM0t2_600x450.jpg',
    itemIdTEMP: 30,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00000_hgzCG1V861sz_1320MM_600x450.jpg',
    itemIdTEMP: 31,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00d0d_960MPvhFynVz_07A07A_600x450.jpg',
    itemIdTEMP: 31,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00P0P_eA8DpBfp9tyz_0hK0CI_600x450.jpg',
    itemIdTEMP: 32,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00M0M_bwAGShHRws0z_0iK0jm_600x450.jpg',
    itemIdTEMP: 33,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00u0u_k1AXgVMUma9z_0lM0t2_600x450.jpg',
    itemIdTEMP: 34,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00c0c_as7xRwOalI5z_0t20lM_600x450.jpg',
    itemIdTEMP: 34,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00000_dlk127Llmm0z_0lM0t2_600x450.jpg//',
    itemIdTEMP: 35,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00R0R_1YygE0iURWfz_0lh0t2_600x450.jpg',
    itemIdTEMP: 36,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00h0h_73oBxg09NP9z_0CI0cR_600x450.jpg',
    itemIdTEMP: 36,
  },
  {
    photoTitle: '',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00W0W_lgdYrdaLMNuz_0CI0q8_600x450.jpg',
    itemIdTEMP: 36,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 37,
  },
  {
    photoTitle: 'christmas1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00K0K_b9ZvkarpIvN_0iu0as_600x450.jpg',
    itemIdTEMP: 38,
  },
  {
    photoTitle: 'christmas2',
    CloudREF: '',
    downloadURL: 'https://images.craigslist.org/00N0N_8mRxAFHxzvi_600x450.jpg',
    itemIdTEMP: 38,
  },
  {
    photoTitle: 'christmas3',
    CloudREF: '',
    downloadURL: 'https://images.craigslist.org/00Q0Q_cIxfY4F7GPI_600x450.jpg',
    itemIdTEMP: 38,
  },
  {
    photoTitle: 'tractor_wheel',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00m0m_1vonsG3xj9tz_0t20CI_600x450.jpg',
    itemIdTEMP: 39,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 40,
  },
  {
    photoTitle: 'popcornCart',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00r0r_kl7E5VpMdqNz_04M07g_600x450.jpg',
    itemIdTEMP: 41,
  },
  {
    photoTitle: 'oil_sign',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00H0H_h0srSr7184Z_0hq0hq_600x450.jpg',
    itemIdTEMP: 42,
  },
  {
    photoTitle: 'oil_sign',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00404_bkvYTysoooy_0hq0hq_600x450.jpg',
    itemIdTEMP: 42,
  },
  {
    photoTitle: 'oil_sign',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00v0v_htuENLweWgX_0hq0hq_600x450.jpg',
    itemIdTEMP: 42,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 43,
  },
  {
    photoTitle: 'restorationhardwareTable',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00J0J_dp52nNf2U2Xz_0dR08O_600x450.jpg',
    itemIdTEMP: 44,
  },
  {
    photoTitle: 'desk',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00p0p_a9NFBUxSOK9z_0i90iH_600x450.jpg',
    itemIdTEMP: 45,
  },
  {
    photoTitle: 'deskChair',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00n0n_4gk3bkHHcHAz_0i90hZ_600x450.jpg',
    itemIdTEMP: 46,
  },
  {
    photoTitle: 'IKEA_dresser',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00H0H_gy84YdgKSWSz_0CI0xj_600x450.jpg',
    itemIdTEMP: 47,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 48,
  },
  {
    photoTitle: 'cameraAccessories',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00r0r_3c91Tf8iDV0z_0t20CI_600x450.jpg',
    itemIdTEMP: 49,
  },
  {
    photoTitle: 'default.jpeg',
    CloudREF: '',
    downloadURL:
      "https://firebasestorage.googleapis.com/v0/b/freeshare-7b345.appspot.com/o/images%2FfreeShareDefaultPic.jpeg?alt=media&token=5f6c8b0b-da4e-4138-b4fb-5c4fb4a4319c'",
    itemIdTEMP: 50,
  },
  {
    photoTitle: 'couch_astoria_1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00v0v_73aC0DYLeitz_1320MM_600x450.jpg',
    itemIdTEMP: 51,
  },
  {
    photoTitle: 'couch_astoria_2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00p0p_abyiZtVwotyz_1320MM_600x450.jpg',
    itemIdTEMP: 51,
  },
  {
    photoTitle: 'loveseat1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00Y0Y_gPE8eeE0BHVz_0CI0t2_600x450.jpg',
    itemIdTEMP: 52,
  },
  {
    photoTitle: 'loveseat2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00I0I_4rA3BM7GfChz_0CI0t2_600x450.jpg',
    itemIdTEMP: 52,
  },
  {
    photoTitle: 'grayCouch1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00F0F_5BWxJx2oCNTz_0gg0cc_600x450.jpg',
    itemIdTEMP: 53,
  },
  {
    photoTitle: 'grayCouch2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00t0t_gouIKhL0asez_0gg0cc_600x450.jpg',
    itemIdTEMP: 53,
  },
  {
    photoTitle: 'redCouch',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00808_4gBfYllto3oz_0t20CI_600x450.jpg',
    itemIdTEMP: 54,
  },
  {
    photoTitle: 'redCouch2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00c0c_61MW1zCBexFz_0t20CI_600x450.jpg',
    itemIdTEMP: 54,
  },
  {
    photoTitle: 'Klik-Klak1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00303_8Dip4FRD8Mfz_0CI0t2_600x450.jpg',
    itemIdTEMP: 55,
  },
  {
    photoTitle: 'Klik-Klak2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00505_55hvUkOkOOCz_0CI0t2_600x450.jpg',
    itemIdTEMP: 55,
  },
  {
    photoTitle: 'corner_couch1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00G0G_4t8QV1p4tR6z_0t20CI_600x450.jpg',
    itemIdTEMP: 56,
  },
  {
    photoTitle: 'corner_couch2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00J0J_lNnkOgrtPetz_0t20CI_600x450.jpg',
    itemIdTEMP: 56,
  },
  {
    photoTitle: 'sleeperSofa1',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00J0J_bXi9emxM3Zjz_0cU0cU_600x450.jpg',
    itemIdTEMP: 57,
  },
  {
    photoTitle: 'sleeperSofa2',
    CloudREF: '',
    downloadURL:
      'https://images.craigslist.org/00Q0Q_cvzVslJmKuzz_1320MM_600x450.jpg',
    itemIdTEMP: 57,
  },
]
module.exports = itemPhotos
