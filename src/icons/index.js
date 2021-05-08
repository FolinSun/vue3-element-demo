import { createApp } from 'vue';
import SvgIcon from '@/components/SvgIcon'; // svg component

// register globally
createApp().component('svg-icon', SvgIcon);

/**
 * 去 svg 文件夹（不包含子目录）下面的找所有文件名以 .svg 结尾的文件能被 require 的文件
 * {directory}   说明需要检索的目录
 * {useSubdirectories}  是否检索子目录
 * {regExp}  匹配文件的正则表达式
 * */
const req = require.context('./svg', false, /\.svg$/);

const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
