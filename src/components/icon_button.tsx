import { ComponentProps } from "react";

// ESTRUTURA DE COMPONENTE

// interface IconButtonProps extends ComponentProps<'button'> { }

// export function IconButton(props: IconButtonProps) {
//   return (
//     <button {...props} className='bg-white/10 border border-white/10 rounded-md p-1.5' />
//     )
//   }


// ESTRUTURA DO MESMO COMPONENTE COM CONDIÇÃO

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={transparent
        ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
        : 'bg-white/10 border border-white/10 rounded-md p-1.5'
      }
    />
  )
}
