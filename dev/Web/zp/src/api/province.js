/*
 * @Author: Iris 
 * @Date: 2019-12-25 09:34:57 
 * @Last Modified by: Iris
 * @Last Modified time: 2019-12-25 10:16:06
 */

 
import axios from '@/utils/axios'


/**
 * 通过ID删除城市信息 
 * @param {Object} param {id:''}
 */
export function deleteProvinceById(param){
  return axios.post('/Province/deleteById',param);
}

/**
 * 通过城市信息 
 * @param {Object} param {id:'}
 */
export function findAllProvince(){
  return axios.get("/Province/findAll")
}

/**
 * 通过id查找城市信息 
 * @param Object param 
 */
export function findProvinceById(param){
  return axios.get('/Province/findById',{params:param})
}



/**
 * 
 * 保存保存或更新保存或更新城市
 *  @param {Object} param{Scale:''}
 */
export function saveOrUpdateProvince(param){
  return axios.post('/Province/saveOrUpdate',param)
}
