<template>
	<div>
		
		<download-excel
			class   = "btn btn-default"
			:data   = "json_data"
			:fields = "json_fields"
			type="csv"
			worksheet = "sheet1"
			name    = "会员信息.xls">

			<button type="primary" @click="outExes" class="exportExportBtn">导出</button>
		</download-excel>
		<button type="primary" @click="outExe" class="exportExportBtns">导出2</button>
		<button type="primary" @click="outExe" class="exportExportBtns">导出3</button>
		<button type="primary" @click="outExe" class="exportExportBtns">导出4</button>
	</div>
</template>
<script>
	// import Blob from '../excel/Blob.js'
	// import Export2Excel from '../excel/Export2Excel.js'
	let valid=require('../common/valid');
	import a,{show} from "@/model/model.js"
	export default {
		created(){
			show();
			console.log(a.b);
		},
		data() {
			return {
				json_fields: {
					'用户名': 'name',
					'城市': 'city',
					'手机号': 'phone.mobile',
					'出生日期': 'birthdate',
					'座机号': {
						field: 'phone.landline',
						callback: (value) => {
							return `Landline Phone - ${value}`;
						}
					},
				},
				json_data: [{
						'name': 'Tony Peña',
						'city': 'New York',
						'country': 'United States',
						'birthdate': '1978-03-15',
						'phone': {
							'mobile': '1-541-754-3010',
							'landline': '(541) 754-3010'
						}
					},
					{
						'name': 'Thessaloniki',
						'city': 'Athens',
						'country': 'Greece',
						'birthdate': '1987-11-23',
						'phone': {
							'mobile': '+1 855 275 5071',
							'landline': '(2741) 2621-244'
						}
					}
				],
				json_meta: [
					[{
						'key': 'charset',
						'value': 'utf-8'
					}]
				],
			}
		},
		methods: {
			outExe(){
				console.log(valid.add())
			}
		}
	}
</script>
<style>
	.exportExportBtn{
		width: 100px;
		height:50px;
		background: #0040D0;
		color:#fff;
	}
	.exportExportBtns{
		width: 100px;
		height:50px;
		background: red;
		color:#fff;
	}
</style>