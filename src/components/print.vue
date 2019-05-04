<template>
	<div>
		<div class="printTests" ref="print">
	　　　　　
	　　</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				myChart:{},
				aData:[
							{value:335, name:'直接访问'},
							{value:310, name:'邮件营销'},
							{value:234, name:'联盟广告'},
							{value:135, name:'视频广告'},
							{value:1548, name:'搜索引擎'}
						],
				bData:[
							{value:111, name:'vfds'},
							{value:310, name:'邮件营销'},
							{value:934, name:'gfds'},
							{value:35, name:'视频广告'},
							{value:1548, name:'g'}
						]
			}
		},
		methods:{
			aaa(){
				

				// 指定图表的配置项和数据
				var option = {
					tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
				},
				series: [
					{
						name:'访问来源',
						type:'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						label: {
							normal: {
								show: false,
								position: 'center'
							},
							emphasis: {
								show: true,
								textStyle: {
									fontSize: '30',
									fontWeight: 'bold'
								}
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						data:this.aData
					}
				]
				};
				return option
				// 使用刚指定的配置项和数据显示图表。
				
				 
			}
		},
		mounted(){
			// this.aaa();
			this.myChart = this.$echarts.init(this.$refs.print);
			this.myChart.setOption(this.aaa());
			let that=this;
			 this.myChart.on('click', function () {
			    that.aData=that.bData;
			 	that.myChart.setOption(that.aaa());
			 })
		}
	}
</script>

<style lang="scss" scoped>
	.printTests{
		width:500px;
		height: 500px;
	}
</style>

