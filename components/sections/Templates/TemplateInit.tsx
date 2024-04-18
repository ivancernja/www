import { CopyButton } from 'components/elements'

export default function TemplateInit({ path }: { path: string }) {
	return (
		<div className='mb-3 flex w-full items-center justify-between rounded-xl bg-[#121212] text-xs text-head'>
			<pre
				style={{
					scrollbarColor: 'black transparent',
					scrollbarWidth: 'thin',
				}}
				className='overflow-x-scroll p-4'
			>{`cargo shuttle init --from ${path}`}</pre>
			<CopyButton code={`cargo shuttle init --from ${path}`} width={16} height={16} />
		</div>
	)
}
