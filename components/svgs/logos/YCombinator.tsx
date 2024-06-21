import { FC, SVGAttributes } from 'react'

const YCombinator: FC<Partial<SVGAttributes<SVGSVGElement>>> = (props) => {
	return (
		<svg
			className='flex-shrink-0'
			width={98}
			viewBox='0 0 98 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path d='M1.5 1H23.0967V23H1.5V1Z' stroke='#7A7A7A' />
			<path
				d='M11.5457 13.5333L7.62988 6.09668H9.4378L11.6975 10.7735C11.6975 10.8503 11.7729 10.927 11.8484 11.0038C11.9238 11.0806 11.9238 11.1574 11.9992 11.3101L12.0747 11.3869V11.4637C12.1501 11.6172 12.1501 11.694 12.2256 11.8476C12.301 11.9244 12.301 12.078 12.3764 12.1538C12.4519 11.9235 12.6028 11.7699 12.6773 11.4637C12.7528 11.2333 12.9036 11.0038 13.0545 10.7735L15.3142 6.09668H16.9712L13.0554 13.611V18.3646H11.5493L11.5457 13.5333Z'
				fill='#7A7A7A'
			/>
			<path
				d='M32.6425 7.01741C33.5945 7.01741 34.4208 7.27611 35.0567 7.79444L34.4217 8.57146C33.8496 8.18386 33.2784 7.92516 32.5805 7.92516C31.5001 7.92516 30.6747 8.50747 30.2302 9.60719C29.976 10.2535 29.8494 11.0945 29.8494 12.1942C29.8494 13.0353 29.9751 13.7465 30.1673 14.2639C30.6756 15.4925 31.5019 16.0739 32.7718 16.0739C33.4706 16.0739 34.1064 15.8801 34.6777 15.4276L35.3126 16.2686C34.4864 16.786 33.6062 17.0456 32.6452 17.0456C31.5019 17.0456 30.549 16.5931 29.7865 15.6232C29.0231 14.7091 28.7061 13.4896 28.7061 12.0032C28.7061 10.5168 29.0869 9.35215 29.8494 8.38315C30.5481 7.54213 31.5019 7.02472 32.6452 7.02472L32.6425 7.01741ZM36.2637 13.4192C36.2637 12.2555 36.5179 11.3496 37.09 10.7042C37.6621 10.0588 38.3608 9.66936 39.25 9.66936C40.2666 9.66936 41.0911 10.057 41.6641 10.898C42.1087 11.5443 42.2991 12.4502 42.2991 13.549C42.2991 14.8425 41.9183 15.8773 41.2187 16.5237C40.6926 16.994 40.013 17.2477 39.3128 17.2349C38.3608 17.2349 37.6603 16.9112 37.0891 16.2C36.517 15.5537 36.2628 14.5838 36.2628 13.4192H36.2637ZM40.7112 11.5452C40.3933 10.9629 39.9478 10.631 39.25 10.631C38.5521 10.631 38.1067 10.8897 37.7887 11.4081C37.5346 11.7957 37.4708 12.4429 37.4708 13.2821C37.4708 14.3818 37.5965 15.1561 37.9154 15.6104C38.2342 16.0647 38.6788 16.3216 39.3128 16.3216C40.0762 16.3216 40.5837 15.934 40.8379 15.2219C40.9636 14.8343 41.0283 14.3078 41.0283 13.6697C41.0911 12.7007 40.9654 11.9876 40.7103 11.536L40.7112 11.5452ZM44.3306 11.6732C44.3306 10.962 44.2678 10.3797 44.0765 9.93629L45.1569 9.67758C45.3473 10.0012 45.4111 10.3888 45.4111 10.7124V10.7764C45.6652 10.5177 45.9194 10.259 46.3092 10.0652C46.7538 9.80648 47.1355 9.67758 47.5163 9.67758C48.0884 9.67758 48.5967 9.93629 48.9137 10.3888C48.9766 10.5168 49.1041 10.7124 49.1679 10.8413C49.9313 10.0643 50.6292 9.67758 51.3917 9.67758C51.9 9.67758 52.3437 9.87138 52.6625 10.195C52.9804 10.5826 53.1708 11.036 53.1708 11.5534V16.9195H52.0105V11.6174C52.0105 10.9062 51.6925 10.5826 51.1123 10.5826C50.7944 10.5826 50.4136 10.7106 50.0957 10.9702C49.9699 11.0982 49.7149 11.2938 49.3969 11.5525L49.2712 11.6805V16.9186H48.0641V11.867C48.0641 11.4145 48.0013 11.0899 47.8737 10.9528C47.6833 10.759 47.4929 10.6941 47.175 10.6941C46.6667 10.6941 46.0945 11.0177 45.3967 11.6631V16.9652H44.3315L44.3306 11.6732ZM55.1323 6.75871L56.2756 6.5C56.4014 7.01741 56.466 7.59972 56.466 8.31002V10.7023C57.101 10.056 57.8006 9.73335 58.4994 9.73335C59.3256 9.73335 60.0244 10.057 60.469 10.7023C60.9773 11.3486 61.2324 12.2546 61.2324 13.3534C61.2324 14.5171 60.9782 15.423 60.469 16.1342C59.9597 16.8454 59.2619 17.169 58.4356 17.169C58.0599 17.1762 57.6884 17.0872 57.3552 16.9103C56.9744 16.7165 56.7202 16.5227 56.5289 16.264L56.3385 17.0411H55.2581C55.3838 16.7174 55.4485 16.1269 55.4485 15.231V8.43891C55.3856 7.66188 55.3227 7.08048 55.1305 6.75688L55.1323 6.75871ZM56.9735 11.1466C56.7831 11.2746 56.5927 11.4702 56.4651 11.664V15.3682C56.9097 15.9505 57.4818 16.2092 58.1716 16.2092C58.7437 16.2092 59.1882 16.0154 59.4424 15.5629C59.7603 15.0455 59.9507 14.3343 59.9507 13.2994C59.9507 12.3853 59.825 11.7472 59.5062 11.3596C59.252 10.972 58.8074 10.7773 58.1716 10.7773C57.7908 10.7133 57.3453 10.8413 56.9645 11.1649L56.9735 11.1466ZM62.8831 7.67285C62.8831 7.41415 62.946 7.22035 63.1373 7.02655C63.3286 6.83275 63.5181 6.76785 63.7722 6.76785C64.0264 6.76785 64.2168 6.83184 64.4072 7.02655C64.5976 7.22126 64.6614 7.41415 64.6614 7.67285C64.6614 7.93156 64.5985 8.12536 64.4072 8.31916C64.2159 8.51296 64.0264 8.57786 63.7722 8.57786C63.5181 8.57786 63.3277 8.51387 63.1373 8.31916C62.9469 8.12444 62.8831 7.93156 62.8831 7.67285ZM63.1471 16.9771V9.86498L64.2905 9.67118V16.9789L63.1471 16.9771ZM66.7594 11.6732C66.7594 11.1558 66.7594 10.8322 66.6965 10.7042C66.6965 10.5104 66.5708 10.3166 66.4423 9.99297L67.5228 9.66936C67.6966 10.0085 67.784 10.3866 67.777 10.7691C68.4757 10.0579 69.2382 9.66936 70.0007 9.66936C70.3815 9.66936 70.6994 9.73335 71.0174 9.92806C71.3353 10.1228 71.5895 10.3806 71.7161 10.7051C71.8418 10.9638 71.9065 11.2225 71.9065 11.5461V16.978H70.8261V12.1284C70.8261 11.5461 70.7632 11.1594 70.5719 10.9647C70.4729 10.8611 70.3543 10.779 70.2232 10.7234C70.0922 10.6678 69.9514 10.6398 69.8094 10.6411C69.5552 10.6411 69.1744 10.7691 68.7927 10.9647C68.4397 11.1483 68.118 11.3884 67.8398 11.6759V16.978H66.7594V11.6732ZM74.4473 11.4145L73.8752 10.6374C74.8272 9.99114 75.781 9.66844 76.7977 9.66844C77.8143 9.66844 78.4502 10.056 78.7672 10.7682C78.893 11.0269 78.893 11.4145 78.893 11.9968V12.3844L78.8301 14.7127V15.0363C78.8301 15.4239 78.8301 15.6826 78.893 15.8773C78.9558 16.1361 79.1471 16.3299 79.4013 16.4597L78.8292 17.2367C78.3209 17.0429 78.0029 16.7193 77.8772 16.2019C77.2422 16.8482 76.5426 17.1709 75.8439 17.1709C75.1451 17.1709 74.573 16.9771 74.1374 16.5886C73.7566 16.2649 73.5653 15.7475 73.5653 15.1012C73.5486 14.7311 73.6278 14.363 73.7951 14.0339C73.9624 13.7048 74.2118 13.4263 74.5182 13.2263C75.1532 12.7738 76.1061 12.58 77.2503 12.58H77.7587V12.0626C77.7587 11.4803 77.6958 11.0936 77.5045 10.9629C77.384 10.8304 77.2361 10.7269 77.0714 10.6598C76.9068 10.5928 76.7295 10.5639 76.5525 10.5753C76.1717 10.5753 75.7262 10.7033 75.2179 10.8989L74.4545 11.4163L74.4473 11.4145ZM77.8152 15.2301L77.8781 13.3561H77.306C76.2893 13.3561 75.6535 13.5499 75.2727 13.9384C75.0185 14.1971 74.8919 14.5847 74.8919 15.1021C74.8919 15.9432 75.2727 16.3957 76.0989 16.3957C76.4596 16.3747 76.8081 16.2556 77.1082 16.0509C77.4084 15.8463 77.6491 15.5635 77.8054 15.232L77.8152 15.2301ZM82.516 9.86224H84.2943L83.9763 10.7764H82.5151V15.3682C82.5151 15.7558 82.578 16.0145 82.7055 16.2092C82.8312 16.3372 83.0863 16.4679 83.4042 16.4679C83.6584 16.4679 83.9126 16.4039 84.103 16.3399L84.2287 17.0511C83.8479 17.2449 83.4653 17.3098 83.0216 17.3098C81.9412 17.3098 81.4338 16.7924 81.4338 15.6936V10.7791H80.4809V9.86498H81.379V9.737C81.379 9.60902 81.4418 9.0907 81.5047 8.24968V8.05497L82.648 7.79626C82.5223 8.57329 82.5223 9.28359 82.5223 9.8659L82.516 9.86224ZM85.4385 13.4183C85.4385 12.2546 85.6926 11.3486 86.2647 10.7033C86.7731 10.057 87.5356 9.66844 88.4247 9.66844C89.4414 9.66844 90.2659 10.056 90.8389 10.8971C91.2834 11.5434 91.4738 12.4493 91.4738 13.5481C91.4738 14.8416 91.093 15.8764 90.3934 16.5227C89.8673 16.9931 89.1877 17.2468 88.4876 17.2339C87.5356 17.2339 86.8351 16.9103 86.2639 16.1991C85.7555 15.5528 85.4376 14.5829 85.4376 13.4183H85.4385ZM89.9497 11.5443C89.6318 10.962 89.1863 10.6301 88.4885 10.6301C87.7906 10.6301 87.3452 10.8888 87.0272 11.4072C86.7731 11.7948 86.7093 12.442 86.7093 13.2812C86.7093 14.3809 86.8351 15.1552 87.1539 15.6095C87.4727 16.0638 87.9173 16.3207 88.5514 16.3207C89.3148 16.3207 89.8222 15.9331 90.0764 15.221C90.2021 14.8334 90.2668 14.3068 90.2668 13.6688C90.2668 12.6998 90.141 11.9867 89.9488 11.5351L89.9497 11.5443ZM93.5691 11.5424C93.5691 10.8961 93.5063 10.3787 93.315 9.99022L94.3954 9.66661C94.5692 10.0058 94.6566 10.3839 94.6496 10.7663V10.8943C95.2217 10.1173 95.8567 9.7306 96.6192 9.7306C96.7449 9.7306 96.8733 9.7306 97 9.79459L96.5554 11.0232C96.4297 10.9592 96.3012 10.9592 96.2375 10.9592C95.9833 10.9592 95.6654 11.0232 95.4112 11.2179C95.157 11.4126 94.9029 11.6055 94.7762 11.8642C94.6926 12.1141 94.6498 12.3763 94.6496 12.6403V17.1014H93.5691V11.5424Z'
				fill='#7A7A7A'
			/>
		</svg>
	)
}

export default YCombinator
