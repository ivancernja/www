import Image from 'next/image'
import Link from 'next/link'
import LaunchBG from './LaunchBG'

export default function TemplateLaunch({ path }: { path: string }) {
	return (
		<div className='relative mb-5 w-full rounded-xl bg-[linear-gradient(85.52deg,_#FC540C_-7.27%,_rgba(255,215,111,0.72)_108.87%)] p-[1px]'>
			<button className='flex w-full items-baseline justify-center gap-1 rounded-xl bg-[#0F0F0F] px-6 py-2'>
				<Link href={`/templates/${path}`}>
					<span className='text-sm text-white'>Launch</span>{' '}
				</Link>
				<Image src='/images/templates/arrow.svg' width={10} height={10} alt='arrow' />
			</button>
			<LaunchBG className='absolute -top-7 left-0 -z-10 w-full' />
		</div>
	)
}
