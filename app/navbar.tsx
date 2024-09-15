import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function Navbar() {
    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <Dock magnification={60} distance={100}>
            {/* sahil & dhwani portfolio */}
            <Link href="https://sahilshenoy.com" target="_blank" rel="noopener noreferrer" passHref>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Icons.manLaptop className="size-full" />
                </DockIcon>
            </Link>
            <Link href="https://dhwanibudhiraja.com" target="_blank" rel="noopener noreferrer" passHref>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Icons.womanLaptop className="size-full" />
                </DockIcon>
            </Link>
            <Separator orientation="vertical" className="h-full" /> 
            {/* will roll out the blog after it has been created */}
            {/* <Separator orientation="vertical" className="h-full" /> 
            <Link href="/blog" passHref>
              <div title="Blog">
                <DockIcon className="bg-white/20 p-3 rounded-full">
                  <Icons.blog className="w-6 h-6" />
                </DockIcon>
              </div>
            </Link> */}
            {/* source code for the lambda function as well as the website */}
            <Link href="https://github.com/sahilshenoy/bucket-byte" target="_blank" rel="noopener noreferrer" passHref>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Icons.gitHub className="size-full" />
                </DockIcon>
            </Link>
            <Link href="https://github.com/yourusername/bucket-byte-backend" target="_blank" rel="noopener noreferrer" passHref>
                <DockIcon className="bg-black/10 dark:bg-white/10 p-3">
                  <Icons.gitHub className="size-full" />
                </DockIcon>
            </Link>
          </Dock>
        </div>
      );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  manLaptop: (props: IconProps) => (
    <svg width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" {...props}><path fill="#77B255" d="M35 36v-5a6 6 0 0 0-6-6H13a6 6 0 0 0-6 6v5h28z"></path><path fill="#F7DECE" d="M16.64 25.106c0 .894 2.36 1.993 4.36 1.993s4.359-1.099 4.359-1.992V21.29h-8.72v3.816z"></path><path fill="#EEC2AD" d="M16.632 22.973c1.216 1.374 2.724 1.746 4.364 1.746c1.639 0 3.146-.373 4.363-1.746v-3.491h-8.728v3.491z"></path><path fill="#F7DECE" d="M14.444 12.936c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622s.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622c-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"></path><path fill="#F7DECE" d="M12.477 13.96c0-5.589 3.816-10.121 8.523-10.121s8.522 4.532 8.522 10.121S25.707 24.081 21 24.081c-4.706-.001-8.523-4.532-8.523-10.121"></path><path fill="#C1694F" d="M21 20.802c-2.754 0-3.6-.705-3.741-.848a.655.655 0 0 1 .902-.95c.052.037.721.487 2.839.487c2.2 0 2.836-.485 2.842-.49a.638.638 0 0 1 .913.015a.669.669 0 0 1-.014.938c-.141.143-.987.848-3.741.848"></path><path fill="#292F33" d="M21 0c5.648 0 9.178 4.648 9.178 8.121c0 3.473-.706 4.863-1.412 3.473l-1.412-2.778s-4.235 0-5.647-1.39c0 0 2.118 4.168-2.118 0c0 0 .706 2.779-3.53-.694c0 0-2.118 1.389-2.824 4.862c-.196.964-1.412 0-1.412-3.473C11.822 4.648 14.646 0 21 0"></path><path fill="#662113" d="M17 14c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1m8 0c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1s1 .45 1 1v1c0 .55-.45 1-1 1"></path><path fill="#C1694F" d="M21.75 16.75h-1.5c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h1.5c.413 0 .75.337.75.75s-.337.75-.75.75"></path><path fill="#E1E8ED" d="M33 35a1 1 0 0 1-1 1H22a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z"></path><path fill="#E1E8ED" d="M20.24 22H3.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C4.354 34.006 4.75 36 7 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"></path><path fill="#99AAB5" d="M19.24 22H2.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C3.354 34.006 3.75 36 6 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"></path><path fill="#E1E8ED" d="M14.019 29.283c.524 1.572.099 3.13-.949 3.479c-1.048.35-2.322-.641-2.846-2.213s-.099-3.13.949-3.479c1.048-.349 2.323.641 2.846 2.213zM19 24.75H3a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5z"></path></svg>
  ),
  womanLaptop: (props: IconProps) => (
    <svg width="800px" height="800px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" {...props}><path fill="#9266CC" d="M35 36v-7c0-3.315-3.685-5.5-7-5.5H16c-3.313 0-7 2.185-7 5.5v7h26z"></path><path fill="#292F33" d="M21.944 1.569c4.106 0 10.948 2.053 10.948 10.948s0 10.948-2.053 10.948c-2.054 0-4.79-2.053-8.896-2.053c-4.105 0-6.784 2.053-8.895 2.053c-2.287 0-2.053-8.211-2.053-10.948c.002-8.895 6.844-10.948 10.949-10.948"></path><path fill="#F7DECE" d="M18.328 23.52C18.328 25 20.5 25.5 22 25.5s3.66-.5 3.66-1.98v-3.205h-7.332v3.205z"></path><path fill="#EEC2AD" d="M18.321 21.679c1.023 1.155 2.291 1.468 3.669 1.468c1.379 0 2.647-.312 3.67-1.468v-2.936h-7.339v2.936z"></path><path fill="#F7DECE" d="M13.734 12.217c0-5.834 3.676-10.563 8.21-10.563c4.534 0 8.211 4.729 8.211 10.563c0 5.833-3.677 10.286-8.211 10.286c-4.534 0-8.21-4.452-8.21-10.286"></path><path fill="#DF1F32" d="M21.944 20.043c-1.605 0-2.446-.794-2.536-.885a.684.684 0 0 1 .96-.974c.035.032.553.491 1.576.491c1.039 0 1.557-.473 1.577-.492a.688.688 0 0 1 .963.02c.26.269.26.691-.004.955c-.089.091-.929.885-2.536.885"></path><path fill="#292F33" d="M11.725 15.5c-.021-1-.044-.224-.044-.465c0-3.422 2.053.494 2.053-1.943c0-2.439 1.368-2.683 2.736-4.051c.685-.685 2.053-2.026 2.053-2.026s3.421 2.067 6.158 2.067c2.736 0 5.474 1.375 5.474 4.112s2.053-1.584 2.053 1.837c0 .244-.022-.531-.04.469h.718c.007-2 .007-1.924.007-3.202C32.893 3.403 26.05.091 21.945.091S10.998 3.348 10.998 12.243c0 .793-.02 1.257.008 3.257h.719z"></path><path fill="#662113" d="M18.608 14.386a.849.849 0 0 1-.846-.846v-.845c0-.465.381-.846.846-.846s.847.381.847.846v.845a.85.85 0 0 1-.847.846m6.765 0a.849.849 0 0 1-.846-.846v-.845c0-.465.381-.846.846-.846c.465 0 .846.381.846.846v.845a.849.849 0 0 1-.846.846"></path><path fill="#C1694F" d="M22.837 17h-1.691a.424.424 0 0 1-.423-.423v-.153c0-.233.189-.424.423-.424h1.691c.232 0 .423.19.423.424v.153a.424.424 0 0 1-.423.423"></path><path fill="#F7DECE" d="M15.444 13.436c0 1.448-.734 2.622-1.639 2.622s-1.639-1.174-1.639-2.622s.734-2.623 1.639-2.623c.905-.001 1.639 1.174 1.639 2.623m16.389 0c0 1.448-.733 2.622-1.639 2.622c-.905 0-1.639-1.174-1.639-2.622s.733-2.623 1.639-2.623c.906-.001 1.639 1.174 1.639 2.623"></path><path fill="#E1E8ED" d="M33 35a1 1 0 0 1-1 1H22a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1z"></path><path fill="#E1E8ED" d="M20.24 22H3.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C4.354 34.006 4.75 36 7 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"></path><path fill="#99AAB5" d="M19.24 22H2.759c-1.524 0-3.478.771-2.478 3.531l3.072 8.475C3.354 34.006 3.75 36 6 36h20l-4-11.24c-.438-1.322-1.235-2.76-2.76-2.76z"></path><path fill="#E1E8ED" d="M14.019 29.283c.524 1.572.1 3.13-.949 3.479c-1.047.35-2.322-.641-2.846-2.213s-.099-3.13.949-3.479c1.048-.349 2.323.641 2.846 2.213zM19 24.75H3a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5z"></path></svg>
  ),
  blog: (props: IconProps) => (
    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512" {...props}>
<g>
	<rect x="293.186" y="307.184" width="131.572" height="112.986"/>
	<rect x="87.243" y="308.893" width="154.448" height="17.162"/>
	<rect x="87.243" y="401.298" width="154.448" height="17.162"/>
	<rect x="87.243" y="355.1" width="154.448" height="17.162"/>
	<path d="M416.428,0.004H95.58C42.787,0.013,0.016,42.792,0,95.577v303.685
		c0.025,62.262,50.463,112.717,112.742,112.734h286.524c62.27-0.017,112.717-50.464,112.734-112.734V95.577
		C511.992,42.792,469.212,0.013,416.428,0.004z M464.805,399.262c-0.008,18.15-7.308,34.424-19.198,46.34
		c-11.916,11.891-28.19,19.19-46.34,19.198H112.742c-18.15-0.009-34.433-7.308-46.348-19.198
		c-11.892-11.916-19.182-28.19-19.198-46.34V118.696h417.61V399.262z"/>
	<path d="M88.96,267.908h34.583c19.71,0,31.642-8.581,31.642-26.548c0-10.852-6.167-18.368-12.2-20.648v-0.268
		c6.034-3.352,10.592-9.519,10.592-19.432c0-14.489-9.251-24.268-29.086-24.268H88.96c-0.796,0-1.332,0.536-1.332,1.34v88.475
		C87.628,267.371,88.164,267.908,88.96,267.908z M107.338,193.495c0-0.528,0.251-0.804,0.804-0.804h13.944
		c7.5,0,11.925,3.888,11.925,10.584c0,6.712-4.425,10.734-11.925,10.734h-13.944c-0.553,0-0.804-0.268-0.804-0.804V193.495z
		 M107.338,229.955c0-0.528,0.251-0.795,0.804-0.795h15c8.061,0,12.343,4.424,12.343,11.405c0,7.097-4.282,11.396-12.343,11.396h-15
		c-0.553,0-0.804-0.276-0.804-0.812V229.955z"/>
	<path d="M181.516,267.908h59.404c0.796,0,1.332-0.536,1.332-1.349v-14.874c0-0.813-0.536-1.341-1.332-1.341h-40.224
		c-0.544,0-0.804-0.268-0.804-0.812v-71.447c0-0.804-0.528-1.34-1.341-1.34h-17.036c-0.805,0-1.332,0.536-1.332,1.34v88.475
		C180.183,267.371,180.711,267.908,181.516,267.908z"/>
	<path d="M292.708,269.374c15.963,0,28.558-7.366,33.251-22.115c2.011-6.301,2.539-11.396,2.539-24.938
		c0-13.542-0.528-18.637-2.539-24.939c-4.693-14.739-17.288-22.114-33.251-22.114c-15.956,0-28.558,7.375-33.243,22.114
		c-2.02,6.302-2.556,11.397-2.556,24.939c0,13.542,0.536,18.637,2.556,24.938C264.149,262.009,276.752,269.374,292.708,269.374z
		 M278.361,202.746c2.011-6.301,6.847-10.055,14.346-10.055c7.508,0,12.335,3.754,14.346,10.055
		c1.073,3.226,1.474,7.634,1.474,19.576c0,11.924-0.402,16.357-1.474,19.567c-2.011,6.31-6.838,10.072-14.346,10.072
		c-7.5,0-12.335-3.763-14.346-10.072c-1.064-3.21-1.475-7.643-1.475-19.567C276.886,210.38,277.297,205.972,278.361,202.746z"/>
	<path d="M387.961,269.374c16.081,0,28.685-8.171,33.251-22.794c1.6-4.952,2.263-12.46,2.263-20.505v-7.517
		c0-0.788-0.536-1.333-1.332-1.333h-31.366c-0.813,0-1.349,0.545-1.349,1.333v12.888c0,0.796,0.536,1.332,1.349,1.332h12.326
		c0.536,0,0.805,0.277,0.805,0.805c0,3.879-0.403,6.703-1.073,8.991c-1.878,6.026-7.777,9.386-14.614,9.386
		c-7.91,0-12.88-3.763-14.891-10.072c-1.064-3.21-1.466-7.643-1.466-19.567c0-11.941,0.402-16.223,1.466-19.441
		c2.011-6.302,6.847-10.19,14.631-10.19c7.5,0,12.05,3.218,15.678,9.385c0.269,0.67,0.939,0.939,1.886,0.67l14.338-6.033
		c0.796-0.402,0.947-1.206,0.536-2.019c-4.299-10.995-15.419-19.425-32.439-19.425c-16.232,0-28.835,7.375-33.527,22.114
		c-2.012,6.302-2.556,11.397-2.556,24.939c0,13.542,0.545,18.637,2.556,24.938C359.126,262.009,371.73,269.374,387.961,269.374z"/>
</g>
</svg>
  ),
};
