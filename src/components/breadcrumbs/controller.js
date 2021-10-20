export default function useBreadcrumbs(props) {
  const { breadcrumbs } = props;
  const renderBreadcrumbs = () =>
    breadcrumbs.map((breadcrumb) => (
      <li className='breadcrumb-item' key={breadcrumb.id}>
        <span>{breadcrumb.name}</span>
      </li>
    ));

  return { ...props, renderBreadcrumbs };
}
