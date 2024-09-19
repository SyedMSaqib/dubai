const Packages = ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const slugToText = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize the first letter of each word
  }
  const slugg = slugToText(slug)
  return (
    <div className="mx-auto  lg:max-w-[70vw] px-4 sm:px-6 lg:px-8 mt-10">
      <h3 className="  text-xl sm:text-2xl lg:text-3xl font-bold">{slugg}</h3>
      alias est provident. Repellat, maxime. Ipsam, magnam, ducimus quis numquam enim illo, quos
      fuga soluta recusandae quisquam mollitia. Aperiam veniam cum molestiae quisquam,
      necessitatibus consequatur expedita, perspiciatis, illo ea natus quos quia molestias pariatur
      soluta! Eum deleniti cupiditate nesciunt earum, aliquam quam enim molestias laborum suscipit
      accusamus natus quas, nihil iste esse placeat repudiandae ab minima sunt libero dignissimos
      possimus, a saepe? Ea perspiciatis rerum blanditiis, ipsum, voluptate debitis quod nihil minus
      explicabo iste voluptates expedita quis optio deserunt reprehenderit cum omnis quaerat nam.
      Similique, saepe itaque. Quos ipsa impedit fugiat repellat? Quaerat nisi quam, cumque magnam
      possimus, optio numquam cum mollitia saepe, eligendi laborum voluptatem sunt nesciunt eius
      facere eum exercitationem! Inventore, fugiat officia. Id quos hic quasi odit reprehenderit
      quae, totam praesentium, illum magni molestias nobis culpa. Nisi accusamus magnam voluptatem,
      magni alias, corporis saepe suscipit ipsum iure doloremque, assumenda molestiae? Nostrum
      maiores aut ab, quasi illo molestias officiis doloremque enim, nemo perferendis reprehenderit
      dolorum dolores delectus. Itaque, in vero? Aperiam maiores, dolore tempore provident
      laboriosam culpa delectus quis nostrum quidem sint esse ducimus error deleniti numquam sed
      vitae libero repellendus magni maxime. Commodi odio praesentium tempora quos placeat
      cupiditate, laboriosam nobis minima quas? Nesciunt voluptate explicabo excepturi sint
      obcaecati, eveniet modi molestias ducimus minima consectetur adipisci illum odit. Nulla rerum
      delectus natus aut porro asperiores doloremque iusto ullam! Ipsum totam aliquid reiciendis
      quidem fuga voluptatibus neque sapiente accusantium magni perferendis labore architecto
      assumenda, tenetur quos consequuntur ab odit doloribus tempore quis repellendus unde
      praesentium blanditiis. Tempore est mollitia assumenda dolor exercitationem. Harum non dolor
      vero sint omnis neque laboriosam odit eum inventore dicta commodi, eligendi minus quibusdam
      illum et ipsam nobis voluptas quam facilis ad quasi perferendis officiis dolores atque. Labore
      ut inventore incidunt distinctio qui aliquam fuga nulla, doloremque aut unde quidem eius minus
      consectetur necessitatibus cumque recusandae id laboriosam. Aut iusto non totam quos quia
      voluptatibus fuga esse explicabo numquam, quidem molestias. Iste, repellat exercitationem
      perferendis soluta quas omnis odio deleniti reprehenderit dolorum laborum. Praesentium,
      veritatis! Rerum, debitis rem magnam earum delectus, est voluptatem esse natus corrupti atque
      asperiores! Dolor asperiores, aut, sunt inventore, quod illum eius itaque corrupti soluta
      vitae modi iusto placeat quia veniam laborum odio enim sed illo cum. Cum maiores voluptate sit
      cupiditate ullam magnam temporibus aliquam quod saepe sequi itaque eaque voluptatem hic, natus
      harum sapiente iure minus? Aut iusto id cumque dicta atque a, autem quia provident animi
      accusamus odit voluptatem blanditiis, dolorem eius sapiente quas quos! Repellat dolor eaque a
      at dolore, atque porro recusandae voluptates assumenda fugit quia? Vero modi hic nulla dolores
      facilis velit ea. Quia officia reiciendis earum aperiam voluptate magnam nihil hic eveniet
      voluptates eligendi tenetur porro beatae molestiae placeat, dolor asperiores obcaecati quas
      cupiditate? Delectus nemo quam dolor, id ratione, doloribus est quia eius quibusdam maxime
      optio ipsa. Sed suscipit ex unde nobis in! Officiis error explicabo, dicta nostrum ipsa hic
      repellat laborum commodi nisi rem tempora doloremque officia. Alias repudiandae nulla quam
      laudantium eum culpa reprehenderit molestias ea, dicta qui aliquam, distinctio, voluptatibus
      est perspiciatis officia magni dolorem beatae esse deleniti fugiat? Suscipit, ratione numquam.
      Cumque eveniet assumenda, voluptatem deserunt dolores doloribus blanditiis suscipit,
      aspernatur nisi, ad reprehenderit eligendi necessitatibus voluptatum aliquam praesentium
      ratione tempore maiores dolor accusantium quae a nemo sapiente molestiae autem. Tempora
      reprehenderit neque sequi numquam, quam vero distinctio explicabo laborum, dignissimos
      officiis ad, rem illo quae. Ut animi repudiandae quo modi, quas alias odio nam quae obcaecati
      eum. Temporibus ipsum fugiat fugit aut similique, quia doloribus nisi est excepturi. Quod
      inventore officia, aspernatur id explicabo pariatur obcaecati est soluta rem dolorem, neque
      vitae voluptatem quis. Doloremque iusto non magnam soluta, adipisci nesciunt eligendi
      consequatur facilis suscipit sit minus earum vitae dolore? Soluta accusamus adipisci ullam
      laborum totam dolor. Vel ducimus eligendi expedita reprehenderit, corporis aspernatur cumque!
    </div>
  )
}

export default Packages
