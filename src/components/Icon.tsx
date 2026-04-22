import Image, { type ImageProps, type StaticImageData } from "next/image"

type IconProps = Omit<ImageProps, "src" | "width" | "height"> & {
	src: StaticImageData
	size?: number
}

// Thin wrapper around next/image for square, statically-imported icons.
// Intentionally a Server Component: it renders a plain <img> and has no
// interactivity, so forcing a client boundary would only grow the bundle.
export default function Icon({ src, alt, size = 48, ...rest }: IconProps) {
	return <Image src={src} alt={alt} width={size} height={size} {...rest} />
}
